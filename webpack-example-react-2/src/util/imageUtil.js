import image1 from '../../assets/images/1-a-bomb.jpg'
import image2 from '../../assets/images/2-abe-sapien.jpg'
import image3 from '../../assets/images/3-abin-sur.jpg'
import image4 from '../../assets/images/4-abomination.jpg'
import image5 from '../../assets/images/5-abraxas.jpg'
import image6 from '../../assets/images/6-absorbing-man.jpg'
import image8 from '../../assets/images/8-adam-strange.jpg'
import image14 from '../../assets/images/14-alan-scott.jpg'
import image17 from '../../assets/images/17-alfred-pennyworth.jpg'
import image20 from '../../assets/images/20-amazo.jpg'
import image24 from '../../assets/images/24-angel.jpg'
import image28 from '../../assets/images/28-animal-man.jpg'

const heroImages = [image1, image2, image3, image4, image5, image6, image8, image14,image17, image20, image24, image28];

const imageByImageName = (imageName) => heroImages.find(
    (image) =>
        image.match(/.*\/(.*)$/)[1] === imageName
);

export default {imageByImageName}
