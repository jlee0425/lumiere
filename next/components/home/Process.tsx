import Link from 'next/link';
import React from 'react';
import { INSTA_LINK, KATALK_LINK } from '../../constants';
import Step from './Step';

const Process = () => {
	return (
		<article className="p-3">
			{STEPS.map(({ title, content }, idx) => (
				<Step key={idx} step={idx + 1} title={title}>
					{content}
				</Step>
			))}
			<div className="divider mb-10" />
		</article>
	);
};

export default Process;

const STEPS = [
	{
		title: '촬영 날짜 선정',
		content: (
			<p>
				원하시는 날짜를 3일 이상 말씀해 주시면 촬영 가능한 날로 안내해
				드리겠습니다.
				<br />
				촬영 날짜는 제주 도착 다음날 혹은 다다음날로 예약하시길 추천드립니다.
				<br />
				<strong>
					셀렉 후 보정본 수령까지는 한 달이 소요되니 결혼식 최소 3달 전에는
					촬영하시길 추천드립니다.
				</strong>
			</p>
		),
	},
	{
		title: '원하는 샵 선택',
		content: (
			<p>
				<strong>제휴샵을 참고해 원하는 샵을 선택해주세요.</strong>
				<br />
				원하시는 샵을 고르실 때에는 각 샵의 인스타그램 및 블로그 후기 글을
				참고하시면 도움이 많이 됩니다.
				<br />
				루미에르스냅 인스타 계정의 모든 사진에서 각 웨딩샵의 태그를 확인하실 수
				있습니다. <br />
				촬영 안내 게시물의 제휴샵을 참고해주세요.
			</p>
		),
	},
	{
		title: '촬영 구성 선택',
		content: <div></div>,
	},
	{
		title: '예약 문의',
		content: (
			<p>
				<Link href={KATALK_LINK} passHref>
					<span className="underline cursor-pointer underline-offset-4 decoration-stone-400 hover:decoration-stone-700">
						루미에르스냅
					</span>
				</Link>
				으로 아래 항목 작성 후 문의 부탁드립니다.
				<pre className="border-2 w-fit p-3 mt-4 border-stone-400">
					{`1. 성함\n2. 연락처\n3. 촬영 희망 날짜\n4. 촬영 상품(원하시는 샵과 구성)\n5. 원본 받으실 이메일 주소`}
				</pre>
			</p>
		),
	},
	{
		title: '예약금 입금 후 예약 확정',
		content: (
			<p>
				예약 안내 종료 후 24시간 내에 입금이 확인되면 예약을 확정합니다.
				<br />
				예약 확정 후에도 궁금하신 점이 있으시면 언제든지 편하게{' '}
				<strong>톡</strong> 부탁드리겠습니다.
			</p>
		),
	},
	{
		title: '촬영지 상담 후 장소 확정',
		content: (
			<p>
				촬영 날의 날씨와 바람세기 등을 고려하여 장소를 선정하고 있습니다.
				<br />
				<Link href={INSTA_LINK} passHref>
					<span className="underline cursor-pointer underline-offset-4 decoration-stone-400 hover:decoration-stone-700">
						루미에르스냅 인스타
					</span>
				</Link>
				에서 원하시는 느낌이나 마음에 드시는 포즈, 사진들을 저장해두셨다가
				보내주시면,
				<br />
				참고하여 장소 선정 후 <strong className="">촬영 전날 9시</strong>에 장소
				상담 드리겠습니다.
			</p>
		),
	},
	{
		title: '촬영',
		content: <></>,
	},
	{
		title: '사진 셀렉',
		content: (
			<p>
				촬영 날 바로 원본을 드리고 있으며 셀렉 후 이메일로 보내주시기 바랍니다.
				<br />
				정밀 보정의 성형 보정 시 따로 원하시는 부분을 같이 남겨주시면 참고하여
				보정해 드립니다.
				<br />
				<i>ex)흉터, 콤플렉스 등</i>
			</p>
		),
	},
	{
		title: '보정본 수령',
		content: (
			<p>
				보정본은 셀렉 후 한 달이 소요됩니다.
				<br />
				급히 사진이 필요하실 경우 청첩장용 10장 선보정 서비스를 이용하시면 1주일
				내로 보정해서 보내드립니다.
			</p>
		),
	},
];
