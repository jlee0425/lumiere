import Head from 'next/head';
import React from 'react';

const SEO = () => {
	return (
		<Head>
			<meta charSet="UTF-8" />
			<base href="/" />
			<link rel="icon" href="/lumiere_logo.jpg" />
			<meta
				name="viewport"
				content="viewport-fit=cover, width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, target-densitydpi=medium-dpi"
			/>
			<meta name="subject" content="루미에르 스냅" />
			<meta name="author" content="Jeongkyu Lee(github.com/jlee0425)" />
			<meta
				name="description"
				content="빛이라는 뜻의 루미에르답게 어느 장소, 순간에도 아름답게 빛나는 사진을 남겨드리겠습니다."
			/>
			<meta property="og:site_name" content="루미에르 스냅" />
			<meta property="og:title" content="루미에르 스냅" />
			<meta
				property="og:description"
				content="빛이라는 뜻의 루미에르답게 어느 장소, 순간에도 아름답게 빛나는 사진을 남겨드리겠습니다."
				id="og_desc"
			/>
			<meta property="og:type" content="website" />
			<meta
				name="keywords"
				content="루미에르, 스냅사진, 웨딩스냅, 커플사진, 웨딩사진, 제주스냅, 제주웨딩스냅, 제주커플스냅, 제주여행, 예비부부, 결혼준비"
			/>
			<title>Lumiere Snap</title>
		</Head>
	);
};

export default SEO;
