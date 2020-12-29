import Link from "next/link";
import Image from "next/image";
import { getImgUrl } from "../lib/sanityClient";
import dynamic from "next/dynamic";

export default function PostHomepage({ post }) {
	const DateUnderPost = dynamic(() => import("./DateUnderPost"));
	const ReadMore = dynamic(() => import("./ReadMore"));

	return (
		<div className="singlePostHomepage">
			<Link href={`/${encodeURIComponent(post.slug.current)}`}>
				<a>
					<h3 className="homepageTitle">{post.title}</h3>
				</a>
			</Link>
			<DateUnderPost date={post.publishedAt} />
			<div className="homePageImage">
				<Link href={`/${encodeURIComponent(post.slug.current)}`}>
					<a>
						<Image
							src={getImgUrl(post.mainImage)
								// .width(300)
								// .height(460)
								.quality(75)
								.auto("format")
								.url()
								.toString()}
							// webp
							// sizes={[300, 150]}
							loading="lazy"
							width={300}
							height={460}
							alt={post.title}
						/>
					</a>
				</Link>
			</div>
			<p>
				{post.excerpt.slice(0, 400)}
				...
			</p>
			<ReadMore slug={post.slug.current} />
		</div>
	);
}
