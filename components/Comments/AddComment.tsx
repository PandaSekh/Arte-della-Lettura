/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Comment from "../../interfaces/Comment";
import { Hash } from "../../lib/encryption/crypto";
import getKey from "../../lib/keyGen";
import config from "../../website.config.json";
import InternalLink from "../UtilComponents/InternalLink";

export default function AddComment({ slug, parentCommentId }: { slug: string; parentCommentId?: string }): JSX.Element {
  const [commentSent, setCommentSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const LoadingComponent = dynamic(() => import("../Loaders/LoadingSpinner"));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const loadScriptByURL = (id: string, url: string) => {
      const scriptExist = document.getElementById(id);

      if (!scriptExist) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        document.body.appendChild(script);
      }
    };

    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
    );
  }, []);

  function sendData(data: FormData) {
    setIsLoading(true);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    window.grecaptcha.ready(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: "submit" })
        .then((token: string) => {
          const fullData: NewCommentData = {
            date: new Date().toLocaleDateString("it-IT"),
            parentCommentId: parentCommentId || undefined,
            id: getKey(),
            username: data.username || "Anonimo",
            email: data.email,
            content: data.content,
            children: [],
            token,
          };
          fetch(`${config.baseurl}/api/putComment/${slug}`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(fullData),
          })
            .then((res) => {
              if (res.ok) {
                setCommentSent(true);
                setIsLoading(false);
                reset({ username: "", email: "", content: "" });
              }
            })
            .catch(() => {
              setCommentSent(true);
              setIsLoading(false);
              reset({ username: "", email: "", content: "" });
            });
        });
    });
  }

  const onSubmit: SubmitHandler<FormData> = (data) => sendData(data);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {commentSent ? (
            <div className="text-center py-4 lg:px-4 ">
              <div
                className="p-2 bg-customBlue items-center text-indigo-100 leading-none rounded lg:rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span className="flex rounded-full bg-dark-white uppercase px-2 py-1 text-xs font-bold mr-3">
                  INVIATO!
                </span>
                <span className="font-semibold mr-2 text-left flex-auto ">
                  Il tuo commento è stato inviato. Una volta approvato comparirà qui :)
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border">
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                  Nome
                </label>
                <input
                  id="username"
                  maxLength={12}
                  placeholder="Anonimo"
                  {...register("username", { minLength: 3, maxLength: 12 })}
                  key={getKey()}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-md "
                />
                {errors.username && errors.username.type === "minLength" && (
                  <span className=" text-xs italic text-red-500">Il nome deve essere di almeno 3 caratteri.</span>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  key={getKey()}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-md"
                />
                {errors.email && <span className=" text-xs italic text-red-500">Email obbligatoria</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                  Commento<span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Ciao!"
                  id="content"
                  rows={6}
                  maxLength={5000}
                  {...register("content", { required: true, maxLength: 5000, minLength: 15 })}
                  key={getKey()}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-md"
                />
                {errors.content && errors.content.type === "required" && (
                  <span className=" text-xs italic text-red-500">Commento obbligatorio</span>
                )}
                {errors.content && errors.content.type === "maxLength" && (
                  <span className=" text-xs italic text-red-500">
                    Commento troppo breve. Lunghezza massima: 5000 caratteri.
                  </span>
                )}
                {errors.content && errors.content.type === "minLength" && (
                  <span className={`text-xs italic text-red-500 ${errors.content ? "border-red-500" : ""}`}>
                    Commento troppo breve. Lunghezza minima: 15 caratteri.
                  </span>
                )}
              </div>

              <div className="mb-4 flex items-center	">
                <input type="checkbox" id="terms" {...register("terms", { required: true })} key={getKey()} />{" "}
                <label htmlFor="terms" className="text-gray-700 text-sm font-bold ml-2">
                  Commentando accetti la{" "}
                  <span className="underline text-customBlue-light">
                    <InternalLink text="Privacy Policy" slug="privacy-policy" />
                  </span>{" "}
                  del blog.
                  <span className="text-red-500">*</span>
                </label>
                <br />
                {errors.email && (
                  <span className=" text-xs italic text-red-500">Devi accettare i termini prima di commentare.</span>
                )}
              </div>

              <div className="m-auto w-min">
                <button
                  type="submit"
                  className="py-2 px-4 rounded border hover:pointer hover:text-customBlue outline-none appearance-none select-none	focus:outline-none"
                >
                  Invia
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </>
  );
}

type FormData = {
  id: string;
  username: string;
  date: string | Date;
  email: string;
  content: string;
  parentCommentId: string;
  terms: boolean;
};

export interface NewCommentData {
  id: string;
  username: string;
  date: string | Date;
  email: Hash | string;
  content: string;
  children: Array<Comment>;
  parentCommentId?: string;
  userimageUrl?: string;
  token: string;
}

AddComment.defaultProps = {
  parentCommentId: undefined,
};
