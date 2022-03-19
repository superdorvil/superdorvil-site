import Image from 'next/image';
import CarouselButton from './CarouselButton';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {CarouselContainer, PhotoContainer, RightButton, LeftButton} from './Elements';

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('../../images/SuperDorvilPhotos', false, /\.(png|jpe?g|svg)$/));

function PhotoCarousel() {
  return (
    <CarouselContainer>
      <CarouselProvider
        isIntrinsicHeight={true}
        isPlaying={false}
        interval={3000}
        totalSlides={14}
        orientation="horizontal"
        visibleSlides={1}
        dragEnabled={false}
				infinite={true}
      >
        <Slider>
          <Slide index={0}>
            <PhotoContainer>
              <Image
                alt="Super Dorvil Collage"
                src={images[`${0}.png`].default}
                quality={100}
                layout="responsive"
                objectFit="cover"
              />
            </PhotoContainer>
          </Slide>
          <Slide index={1}>
            <PhotoContainer>
              <Image
                alt="Super Dorvil Collage"
                src={images[`${1}.png`].default}
                quality={100}
                layout="responsive"
                objectFit="cover"
              />
            </PhotoContainer>
          </Slide>
					<Slide index={2}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${2}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
					<Slide index={3}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${3}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
					<Slide index={4}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${4}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
					<Slide index={5}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${5}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
					<Slide index={6}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${6}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
					<Slide index={7}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${7}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
					<Slide index={8}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${8}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
					<Slide index={9}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${9}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
					<Slide index={10}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${10}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
					<Slide index={11}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${11}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
					<Slide index={12}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${12}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
					<Slide index={13}>
						<PhotoContainer>
							<Image
								alt="Super Dorvil Collage"
								src={images[`${13}.png`].default}
								quality={100}
								layout="responsive"
								objectFit="cover"
							/>
						</PhotoContainer>
					</Slide>
        </Slider>
				<RightButton>
        	<ButtonBack>
						<CarouselButton right={true} />
					</ButtonBack>
				</RightButton>
				<LeftButton>
					<ButtonNext>
						<CarouselButton />
					</ButtonNext>
				</LeftButton>
      </CarouselProvider>
    </CarouselContainer>
  );
}

export default PhotoCarousel;
