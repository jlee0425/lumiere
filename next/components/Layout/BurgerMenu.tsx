import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { slide as Menu } from 'react-burger-menu';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const BurgerMenu = ({ isOpen, onClose }: Props) => {
	const router = useRouter();

	const handleRoute = useCallback(
		(to: string) => () => {
			router.push(to);
			onClose();
		},
		[onClose, router]
	);

	return (
		<Menu
			outerContainerId="outer-container"
			pageWrapId="page-wrap"
			isOpen={isOpen}
			onClose={onClose}
			className="w-[100vw] h-full px-5 py-4"
			customBurgerIcon={false}
			customCrossIcon={false}
			disableAutoFocus
		>
			<span className="absolute text-eggshell-700 top-2/3 -left-44 font-extrabold tracking-widest text-8xl transform rotate-90 opacity-20 -z-[1]">
				Lumière
			</span>
			<div className="flex flex-col w-80 z-[1101]">
				<GalleryMenu handleClick={handleRoute} />
				{MENUS.map(({ url, title }) => (
					<MenuLink
						key={`header-main-link-${title}`}
						onClick={handleRoute(url!)}
						title={title}
						mt={4}
					/>
				))}
				<li className="mt-4">
					<a
						href="https://www.instagram.com/youn_changmin/?igshid=YmMyMTA2M2Y%3D"
						target="_blank"
						rel="noreferrer"
					>
						<span className={`text-2xl text-eggshell-200 cursor-pointer`}>
							Instagram
						</span>
					</a>
				</li>
				<ul className="flex flex-col space-y-2 mt-1">
					{INSTA_MENU.map(({ url, title }, idx) => (
						<li key={`header-sub-link-${title}`} className="mt-1">
							<a href={url} target="_blank" rel="noreferrer">
								<span
									className={`text-xl text-eggshell-200 cursor-pointer ${
										idx === 0 ? 'pl-4' : 'pl-10'
									}`}
								>
									{idx === 0 && <strong>└ </strong>}
									{title}
								</span>
							</a>
						</li>
					))}
				</ul>
				<li className="mt-4">
					<a
						href="http://pf.kakao.com/_gReExb"
						target="_blank"
						rel="noreferrer"
						className="pt-4"
					>
						<span className={`text-2xl text-eggshell-200 cursor-pointer`}>
							Contact
						</span>
					</a>
				</li>
			</div>
		</Menu>
	);
};

export default BurgerMenu;

const GalleryMenu = ({
	handleClick,
}: {
	handleClick: (url: string) => () => void;
}) => {
	return (
		<li>
			<span className="text-2xl text-eggshell-200 cursor-pointer">Gallery</span>
			<ul className={`flex flex-col pl-4 mt-1`}>
				{GALLERY_SUB_MENU.map(({ url, title }, idx) =>
					idx === 0 ? (
						<div className="flex flex-col">
							<MenuLink
								title={title}
								size="sm"
								isFirst
								onClick={handleClick(url)}
							/>
							<ul className={`flex flex-col pl-8 mt-1`}>
								{PARIS_SUB_MENU.map(({ title, url }, idx) => (
									<MenuLink
										key={`paris-menu-${title}`}
										title={title}
										size="sm"
										isFirst={idx === 0}
										twStyles={idx > 0 ? 'pl-6' : ''}
										onClick={handleClick(url)}
										mt={1}
									/>
								))}
							</ul>
						</div>
					) : (
						<MenuLink
							title={title}
							onClick={handleClick(url)}
							size="sm"
							twStyles="pl-6"
							mt={2}
						/>
					)
				)}
			</ul>
		</li>
	);
};

const MenuLink = ({
	title,
	isFirst,
	onClick,
	size = 'md',
	twStyles,
	mt,
}: MenuProps & { onClick: () => void; mt?: number }) => {
	return (
		<li onClick={onClick} className={mt ? `mt-${mt}` : ''}>
			{isFirst ? (
				<span className="text-xl text-eggshell-200 cursor-pointer">
					<strong>└ </strong>
					{title}
				</span>
			) : (
				<span
					className={
						`${
							size === 'md' ? 'text-2xl' : 'text-xl'
						} text-eggshell-200 cursor-pointer ` + twStyles
					}
				>
					{title}
				</span>
			)}
		</li>
	);
};

type MenuProps = {
	url?: string;
	title: string;
	isFirst?: boolean;
	size?: 'sm' | 'md';
	twStyles?: string;
};

const GALLERY_SUB_MENU = [
	{ url: '/gallery/paris', title: 'Paris' },
	{ url: '/gallery/jeju', title: 'Jeju' },
	{ url: '/gallery/side-projects', title: 'Portfolio' },
];

const PARIS_SUB_MENU = [
	{ url: '/gallery/paris/eiffel-sunrise', title: 'Eiffel At Sunrise' },
	{ url: '/gallery/paris/eiffel-sunset', title: 'Eiffel At Sunset' },
	{ url: '/gallery/paris/louvre-sunset', title: 'Louvre At Sunset' },
	{ url: '/gallery/paris/night', title: 'Paris At Night' },
];

const INSTA_MENU: MenuProps[] = [
	{
		url: 'https://www.instagram.com/youn_changmin/?igshid=YmMyMTA2M2Y%3D',
		title: '@youn_changmin',
	},
	{
		url: 'https://www.instagram.com/lumiere_snap/?igshid=YmMyMTA2M2Y%3D',
		title: '@lumiere_snap',
	},
	{
		url: 'https://www.instagram.com/lumieresnap__paris/?igshid=YmMyMTA2M2Y%3D',
		title: '@lumieresnap_paris',
	},
];

const MENUS: MenuProps[] = [
	{ url: '/process', title: 'Process' },
	{ url: '/product', title: 'Product' },
];
