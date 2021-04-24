import Link from "next/link";
import Image from "next/image";
import DateUnderPost from "../Post/DateUnderPost";
import ReadMore from "./ReadMore";

export default function PostHomepage({ post, data }) {
	return (
		<div className="singlePostHomepage m-auto w-11/12 mb-8 grid">
			<Link href={`/${encodeURIComponent(data.slug)}`}>
				<a>
					<h3 className="homepageTitle text-center font-light text-2xl mb-2 hover:text-customBlue">
						{data.title}
					</h3>
				</a>
			</Link>
			<DateUnderPost date={data.publishedAt} />
			<div className="homePageImage grid m-auto my-2 w-72 relative transition-opacity opacity-100 hover:opacity-80">
				<Link href={`/${encodeURIComponent(data.slug)}`}>
					<a>
						{/* <div className="homePageImage"> */}
						<Image
							src={`/static/images/books/${data.image}`}
							loading="lazy"
							// width={300}
							// height={460}
							alt={data.title}
							layout="fill"
							objectFit="contain"
						/>
						{/* </div> */}
					</a>
				</Link>
			</div>
			<style jsx>
				{`
					.homePageImage {
						height: 28.75rem;
					}
				`}
			</style>
			<p className="extract">
				{data.extract
					? data.extract?.slice(0, 400)
					: post.slice(0, 400)}
				...
			</p>
			<style jsx>
				{`
					.extract {
						max-width: 80%;
						margin: auto;
					}
				`}
			</style>
			<ReadMore slug={data.slug} />
		</div>
	);
}
