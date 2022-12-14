import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  closeClickOverlay = evt => {
    if (evt.currentTarget === evt.target) {
      this.toggleModal();
    }
  };

  render() {
    const { isModalOpen } = this.state;

    const {
      image: { webformatURL, tags, largeImageURL },
    } = this.props;
    return (
      <>
        <img
          className={css.img}
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        {isModalOpen && (
          <Modal
            closeModal={this.toggleModal}
            closeModalOverlay={this.closeClickOverlay}
            image={largeImageURL}
            description={tags}
          />
        )}
      </>
    );
  }
}
