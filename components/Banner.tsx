import Image from "next/image";
import catImage from "@/assets/images/main-slider/4.jpg";
import Link from "next/link";
import "./Banner.css";
const Banner = () => {
	return (
		<section id="product-slider">
			<div className="main-slider swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<Image
							src={catImage.src}
							alt="Product 3"
							width={1423}
							height={599}
						/>
						<div className="swiper-slide-content">
							<h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
								Accessories
							</h2>
							<p className="mb-4 text-white md:text-2xl">
								Elevate your style with our latest <br />
								sportswear collection.
							</p>
							<Link
								href="/"
								className="bg-red-400 hover:bg-transparent text-white hover:text-white border border-transparent hover:border-white font-semibold px-4 py-2 rounded-full inline-block"
							>
								Shop now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
