/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from "react";
import {
  DeepMap,
  FieldError,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import useDynamicScript from "usedynamicscript";
import NewCommentData, { FormData } from "@interfaces/NewComment";
import { getKey } from "@lib/utils";
import InternalLink from "../UtilComponents/InternalLink";
import LoadingComponent from "../Loaders/LoadingSpinner";

function CommentForm({
  register,
  errors,
  handleSubmit,
  onSubmit,
}: {
  errors: DeepMap<FormData, FieldError>;
  register: UseFormRegister<FormData>;
  onSubmit: SubmitHandler<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
}): JSX.Element {
  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border"
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
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
          <span className="text-xs italic text-red-500">
            Il nome deve essere di almeno 3 caratteri.
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
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
        {errors.email && (
          <span className=" text-xs italic text-red-500">
            Email obbligatoria
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="content"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Commento<span className="text-red-500">*</span>
        </label>
        <textarea
          placeholder="Scrivi il tuo commento..."
          id="content"
          rows={6}
          maxLength={5000}
          {...register("content", {
            required: true,
            maxLength: 5000,
            minLength: 15,
          })}
          key={getKey()}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-md"
        />
        {errors.content && errors.content.type === "required" && (
          <span className=" text-xs italic text-red-500">
            Commento obbligatorio
          </span>
        )}
        {errors.content && errors.content.type === "maxLength" && (
          <span className=" text-xs italic text-red-500">
            Commento troppo breve. Lunghezza massima: 5000 caratteri.
          </span>
        )}
        {errors.content && errors.content.type === "minLength" && (
          <span
            className={`text-xs italic text-red-500 ${errors.content ? "border-red-500" : ""
              }`}
          >
            Commento troppo breve. Lunghezza minima: 15 caratteri.
          </span>
        )}
      </div>

      <div className="mb-4 flex items-center	">
        <input
          type="checkbox"
          id="terms"
          {...register("terms", { required: true })}
          key={getKey()}
          className="h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
        />{" "}
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
          <span className=" text-xs italic text-red-500">
            Devi accettare i termini prima di commentare.
          </span>
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
    </motion.form>
  );
}

function Notification({
  keyProp,
  onRemove,
}: {
  keyProp: string;
  onRemove: (notifKey: string) => void;
}): JSX.Element {
  return (
    <motion.div
      className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-dark-white rounded-md"
      style={{
        backgroundColor: "#9ae6b4",
        color: "#2f855a",
        borderWidth: "1px",
        borderColor: "#2f855a",
      }}
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
    >
      <div slot="avatar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-check-circle w-5 h-5 mx-2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <div className="text-xl font-normal  max-w-full flex-initial">
        <div className="py-2">
          Commento inviato con successo
          <div className="text-sm font-base">A breve comparirà qui!</div>
        </div>
      </div>
      <div className="flex flex-auto flex-row-reverse">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2"
            onClick={() => onRemove(keyProp)}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function AddComment({
  slug,
  parentCommentId,
}: {
  slug: string;
  parentCommentId?: string;
}): JSX.Element {
  const [commentSent, setCommentSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState<JSX.Element[]>([]);
  const [insertRecaptchaScript, removeRecaptchaScript] = useDynamicScript(`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`, "recaptcha");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    insertRecaptchaScript();
    return (() => removeRecaptchaScript());
  }, []);

  function onNotifRemove(notifKey: string) {
    setNotif((prev) => prev.filter((previous) => previous.key !== notifKey));
  }

  useEffect(() => {
    if (commentSent) {
      const key = getKey();
      setNotif((prev) => [
        ...prev,
        <Notification
          keyProp={key}
          key={key}
          onRemove={() => onNotifRemove(key)}
        />,
      ]);
    }
  }, [commentSent]);

  function sendData(data: FormData) {
    setIsLoading(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    window.grecaptcha.ready(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
          action: "submit",
        })
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
          fetch(`/api/putComment/${slug}`, {
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
      {!isLoading && !commentSent && (
        <CommentForm
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
      {isLoading && (
        <LoadingComponent />
      )}
      <AnimatePresence>
        {notif.map((notification) => notification)}
      </AnimatePresence>
    </>
  );
}





AddComment.defaultProps = {
  parentCommentId: undefined,
};
