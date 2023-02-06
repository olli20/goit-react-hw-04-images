import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

import styles from './image-gallery.module.scss';

const ImageGallery = ({items, showImage}) => {
    const elements = items.map(({id, webformatURL, largeImageURL, tags}) => 
        <ImageGalleryItem 
        key={id} 
        showImage={showImage} 
        webformatURL={webformatURL} 
        largeImageURL={largeImageURL}
        tags={tags} />)
    return (
        <ul className={styles.gallery}>
            {elements}
        </ul>
    )
}

export default ImageGallery;

ImageGallery.defaultProps = {
    items: [],
}

ImageGallery.propTypes ={
    showImage: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
}