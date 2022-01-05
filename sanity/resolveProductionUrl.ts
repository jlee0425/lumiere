export default function resolveProductionUrl(document: any) {
	return `https://my-site.com/posts/${document.slug.current}`;
}
