import PropTypes from 'prop-types';

import styles from './image-gallery-item.module.scss';

const ImageGalleryItem = ({tags, webformatURL, largeImageURL, showImage}) => {
    return (
        <li onClick={() => showImage(tags, largeImageURL)} className={styles.item}>
            <img className={styles.image} src={webformatURL} alt={tags} />
        </li>
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    showImage: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}