import Link from "next/link";
import Image from "next/image";
import DateUnderPost from "../Post/DateUnderPost";
import ReadMore from "./ReadMore";

export default function PostHomepage({ post, data }: { post: string, data: { [key: string]: any } }) {
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
			<div className="homePageImage grid m-auto my-2 w-72 h-80 relative transition-opacity opacity-100 hover:opacity-80">
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
			<p className="extract">
				{data.extract
					? data.extract?.slice(0, 400)
					: post.slice(0, 400)}
				...
			</p>
			<style jsx>
				{`
				.extract {
					max-width: 100%;
					margin: auto;
				}
				@media (max-width: 768px) {
					.homePageImage {
						height: 24rem;
					}
					a,
					.homePageImage {
						width: inherit;
					}
					.extract {
						max-width: 80%;
						margin: auto;
					}
				}
				.homePageImage {
					height: 28.75rem;
				}
				`}
			</style>
			<ReadMore slug={data.slug} />
		</div>
	);
}
