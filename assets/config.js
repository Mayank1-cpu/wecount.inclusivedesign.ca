// TODO:
// This is where I plan to put the global variables for the api endpoints. They are hardcoded for now.
"use strict"

export default {
	appTitle: "We Count",
	appTitleShort: "WC",
	appDescription: "We Count Project",
	appThemeColor: "#fffffff",
	appBgColor: "#00172c ",
	appIcon: "assets/app-icon.png",
	wpDomain: "https://wecount-cms.inclusivedesign.ca",
	loadDbName: "starter_wp",
	apiBase: "/wp-json/wp/v2/",
	contactEmail: "wecount@inclusivedesign.ca",
	// Using raw SVG content is to work around the issue with dynamically loading and injecting inline SVGs into the template.
	socialMedias: [{
		id: "facebook",
		title: "Facebook",
		href: "",
		svg: "<svg width='78' height='78' viewBox='0 0 78 78' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M78 39C78 17.4586 60.5414 0 39 0C17.4586 0 0 17.4586 0 39C0 58.4695 14.2594 74.6027 32.9062 77.5277V50.2734H23.0039V39H32.9062V30.4078C32.9062 20.635 38.7258 15.2344 47.6379 15.2344C51.9035 15.2344 56.3672 15.9961 56.3672 15.9961V25.5938H51.4465C46.602 25.5938 45.0938 28.6025 45.0938 31.6875V39H55.9102L54.1811 50.2734H45.0938V77.5277C63.7406 74.6027 78 58.4695 78 39Z' fill='white'/></svg>"
	}, {
		id: "youtube",
		title: "YouTube",
		href: "",
		svg: "<svg width='78' height='78' viewBox='0 0 78 78' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M39 0C17.4609 0 0 17.4609 0 39C0 60.5391 17.4609 78 39 78C60.5391 78 78 60.5391 78 39C78 17.4609 60.5391 0 39 0ZM55.2526 25.5927C57.0425 26.0838 58.4522 27.5311 58.9306 29.369C59.8 32.6999 59.8 39.65 59.8 39.65C59.8 39.65 59.8 46.5998 58.9306 49.931C58.4522 51.7689 57.0425 53.2162 55.2526 53.7076C52.0087 54.6 39 54.6 39 54.6C39 54.6 25.9912 54.6 22.7471 53.7076C20.9572 53.2162 19.5475 51.7689 19.0691 49.931C18.2 46.5998 18.2 39.65 18.2 39.65C18.2 39.65 18.2 32.6999 19.0691 29.369C19.5475 27.5311 20.9572 26.0838 22.7471 25.5927C25.9912 24.7 39 24.7 39 24.7C39 24.7 52.0087 24.7 55.2526 25.5927Z' fill='white'/><path d='M35.1 46.8V33.8L45.5 40.3002L35.1 46.8Z' fill='white'/></svg>"
	}, {
		id: "instagram",
		title: "Instagram",
		href: "",
		svg: "<svg width='78' height='78' viewBox='0 0 78 78' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M39 0C17.4609 0 0 17.4609 0 39C0 60.5391 17.4609 78 39 78C60.5391 78 78 60.5391 78 39C78 17.4609 60.5391 0 39 0ZM30.4253 18.3257C32.6436 18.2247 33.3527 18.2 38.9987 18.2C44.6464 18.2 45.3529 18.2247 47.5712 18.3257C49.7855 18.4271 51.2979 18.7776 52.6239 19.292C53.9932 19.8229 55.1502 20.5335 56.3073 21.6905C57.4643 22.8467 58.175 24.0072 58.708 25.3752C59.2193 26.6978 59.5703 28.2092 59.6743 30.4236C59.774 32.6423 59.8 33.3512 59.8 39.0002C59.8 44.6492 59.774 45.3564 59.6743 47.5751C59.5703 49.7886 59.2193 51.3005 58.708 52.6235C58.175 53.9911 57.4643 55.1516 56.3073 56.3077C55.1516 57.4647 53.9928 58.1772 52.6252 58.7084C51.3018 59.2228 49.7886 59.5734 47.5742 59.6748C45.3555 59.7757 44.6487 59.8004 38.9993 59.8004C33.3508 59.8004 32.6423 59.7757 30.4236 59.6748C28.2096 59.5734 26.6977 59.2228 25.3743 58.7084C24.0071 58.1772 22.8467 57.4647 21.6909 56.3077C20.5344 55.1516 19.8237 53.9911 19.292 52.6231C18.778 51.3005 18.4275 49.789 18.3256 47.5747C18.2251 45.356 18.2 44.6492 18.2 39.0002C18.2 33.3512 18.226 32.6419 18.3252 30.4232C18.4249 28.2097 18.7759 26.6978 19.2915 25.3748C19.8246 24.0072 20.5352 22.8467 21.6922 21.6905C22.8484 20.534 24.0089 19.8233 25.3769 19.292C26.6995 18.7776 28.2109 18.4271 30.4253 18.3257ZM38.9987 18.2C38.9998 18.2 39.0008 18.2 39.0019 18.2H38.9954C38.9965 18.2 38.9976 18.2 38.9987 18.2Z' fill='white'/><path fill-rule='evenodd' clip-rule='evenodd' d='M37.1361 21.9484C37.4984 21.9478 37.8882 21.948 38.3088 21.9482L39.002 21.9484C44.5557 21.9484 45.2139 21.9683 47.4071 22.068C49.4351 22.1607 50.5358 22.4996 51.269 22.7843C52.2396 23.1613 52.9317 23.612 53.6593 24.34C54.3873 25.068 54.8379 25.7613 55.2158 26.732C55.5005 27.4643 55.8398 28.565 55.9321 30.593C56.0318 32.7857 56.0534 33.4444 56.0534 38.9955C56.0534 44.5465 56.0318 45.2052 55.9321 47.3979C55.8394 49.4259 55.5005 50.5266 55.2158 51.2589C54.8388 52.2296 54.3873 52.9208 53.6593 53.6483C52.9312 54.3764 52.2401 54.827 51.269 55.204C50.5366 55.49 49.4351 55.828 47.4071 55.9208C45.2144 56.0204 44.5557 56.0421 39.002 56.0421C33.4479 56.0421 32.7897 56.0204 30.597 55.9208C28.569 55.8272 27.4683 55.4883 26.7347 55.2036C25.764 54.8266 25.0707 54.3759 24.3427 53.6479C23.6146 52.9199 23.164 52.2283 22.7861 51.2572C22.5014 50.5248 22.1621 49.4242 22.0698 47.3961C21.9701 45.2035 21.9502 44.5448 21.9502 38.9903C21.9502 33.4357 21.9701 32.7805 22.0698 30.5878C22.1625 28.5598 22.5014 27.4591 22.7861 26.7259C23.1631 25.7552 23.6146 25.0619 24.3427 24.3339C25.0707 23.6059 25.764 23.1552 26.7347 22.7774C27.4679 22.4913 28.569 22.1533 30.597 22.0602C32.5158 21.9735 33.2594 21.9475 37.1361 21.9432V21.9484ZM50.105 25.4021C48.727 25.4021 47.609 26.5188 47.609 27.8973C47.609 29.2753 48.727 30.3933 50.105 30.3933C51.483 30.3933 52.6011 29.2753 52.6011 27.8973C52.6011 26.5192 51.483 25.4012 50.105 25.4012V25.4021ZM28.3203 39.0002C28.3203 33.1013 33.1028 28.3187 39.0016 28.3184C44.9006 28.3184 49.6821 33.1012 49.6821 39.0002C49.6821 44.8992 44.9011 49.6798 39.002 49.6798C33.103 49.6798 28.3203 44.8992 28.3203 39.0002Z' fill='white'/><path d='M39.002 32.0668C42.831 32.0668 45.9354 35.1708 45.9354 39.0002C45.9354 42.8292 42.831 45.9336 39.002 45.9336C35.1726 45.9336 32.0686 42.8292 32.0686 39.0002C32.0686 35.1708 35.1726 32.0668 39.002 32.0668Z' fill='white'/></svg>"
	}, {
		id: "twitter",
		title: "Twitter",
		href: "",
		svg: "<svg width='78' height='78' viewBox='0 0 78 78' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M39 0C17.4609 0 0 17.4609 0 39C0 60.5391 17.4609 78 39 78C60.5391 78 78 60.5391 78 39C78 17.4609 60.5391 0 39 0ZM37.9138 33.0492L37.832 31.6997C37.5864 28.202 39.7415 25.0073 43.1515 23.768C44.4064 23.3274 46.5342 23.2723 47.9254 23.6579C48.471 23.8231 49.5077 24.3739 50.2442 24.8696L51.5809 25.7785L53.054 25.3103C53.8724 25.0624 54.9636 24.6493 55.4546 24.3739C55.9184 24.126 56.3276 23.9883 56.3276 24.071C56.3276 24.5392 55.3182 26.1365 54.4726 27.0178C53.3268 28.2571 53.6542 28.3673 55.9729 27.5411C57.3642 27.0729 57.3915 27.0729 57.1187 27.5962C56.955 27.8716 56.1093 28.8355 55.2091 29.7168C53.6815 31.2315 53.5996 31.3968 53.5996 32.6636C53.5996 34.619 52.6721 38.695 51.7446 40.9258C50.026 45.112 46.3432 49.4358 42.6605 51.6115C37.4773 54.6685 30.5756 55.4397 24.765 53.6495C22.8281 53.0436 19.5 51.5014 19.5 51.226C19.5 51.1433 20.5093 51.0332 21.7369 51.0056C24.3012 50.9506 26.8655 50.2345 29.0479 48.9676L30.521 48.0863L28.8297 47.508C26.429 46.6818 24.2739 44.7815 23.7284 42.9913C23.5647 42.413 23.6192 42.3854 25.1469 42.3854L26.7291 42.3579L25.3924 41.7245C23.8102 40.9258 22.3644 39.5763 21.6551 38.1993C21.1368 37.2078 20.4821 34.7016 20.673 34.5088C20.7276 34.4262 21.3005 34.5915 21.9552 34.8118C23.8375 35.5003 24.083 35.3351 22.9918 34.1784C20.9458 32.0853 20.3184 28.9732 21.3005 26.0263L21.7642 24.7044L23.5647 26.4945C27.2474 30.1024 31.5849 32.2505 36.5498 32.8839L37.9138 33.0492Z' fill='white'/></svg>"
	}],
	funders: [],
	numOfRecsPerPage: 10,
	dev: (process.env.NODE_ENV !== "production")
}
