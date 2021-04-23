import Link from "next/link";
import Image from "next/image";
import DateUnderPost from "./DateUnderPost";
import ReadMore from "./ReadMore";

export default function PostHomepage({ post, data }) {
	return (
		<div className="singlePostHomepage">
			<Link href={`/${encodeURIComponent(data.slug)}`}>
				<a>
					<h3 className="homepageTitle">{data.title}</h3>
				</a>
			</Link>
			<DateUnderPost date={data.publishedAt} />
			<div className="homePageImage">
				<Link href={`/${encodeURIComponent(data.slug)}`}>
					<a>
						<div className="homePageImage">
							<Image
								src={`/static/images/books/${data.image}`}
								loading="lazy"
								// width={300}
								// height={460}
								alt={data.title}
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</a>
				</Link>
			</div>
			<p className="extract">
				{data.extract.slice(0, 400)}
				...
			</p>
			<ReadMore slug={data.slug} />
		</div>
	);
}
