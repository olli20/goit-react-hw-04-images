import {Component} from 'react';

import SearchBar from './modules/SearchBar';
import ImageGallery from './modules/ImageGallery';
import Button from './shared/components/Button';
import Modal from './shared/components/Modal';
import Loader from './shared/components/Loader';
import Message from './shared/components/Message';

import {searchImages} from './shared/services/gallery-api';

import styles from './app.module.scss';

class App extends Component {
  state = {
    search: "",
    items: [],
    loading: false,
    error: null,
    page: 1,
    totalHits: null,
    showModal: false,
    details: null,
  }

  componentDidUpdate(prevProps, prevState) {
    const {search, page} = this.state;
    if(prevState.search !== search || prevState.page !== page) {
        this.fetchImages();
    }
  }

  async fetchImages() {
    try {
        this.setState({loading: true})
        const {search, page, totalHits} = this.state;
        const data = await searchImages(search, page);
        this.setState(({items}) => ({
            items: [...items, ...data.hits],
        }))
        if(!totalHits) {
          this.setState({totalHits: data.totalHits})
        }
      }
    catch(error) {
        this.setState({error: error.message})
    }
    finally {
      this.setState({loading: false})
    }
  }

  searchImages = ({search}) => {
    this.setState({search, items: [], page: 1, totalHits: null});
  }

  loadMore = () => {
    this.setState(({page, totalHits}) => ({page: page + 1, totalHits: totalHits - 20}))
  }

  showImage = (tags, largeImageURL) => {
    this.setState({
      details: {
        tags,
        largeImageURL,
      },
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({
        details: null,
        showModal: false,
    })
}

  render() {
    const {items, loading, details, showModal, totalHits, error} = this.state;
    const {searchImages, loadMore, showImage, closeModal} = this;
    
    return(
      <div className={styles.app}>
        {showModal && <Modal onClose={closeModal}><img src={details.largeImageURL} alt={details.tags} /></Modal>}
        <SearchBar onSubmit={searchImages} />
        <ImageGallery items={items} showImage={showImage} />
        {loading && <Loader />}
        {(totalHits >= 20) && <Button onClick={loadMore}>Load more</Button>}
        {error && <Message text="Something went wrong..." />}
      </div>
    )
  }
}

export default App;