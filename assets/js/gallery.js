/**
 * Universal Image Gallery System
 * Apply to all pages for consistent image gallery functionality
 */

class ImageGallery {
    constructor(options = {}) {
        this.options = {
            modalId: options.modalId || 'imageModal',
            modalContentId: options.modalContentId || 'modalImage',
            captionId: options.captionId || 'caption',
            closeClass: options.closeClass || 'close',
            ...options
        };

        this.init();
    }

    init() {
        this.modal = document.getElementById(this.options.modalId);
        this.modalImg = document.getElementById(this.options.modalContentId);
        this.caption = document.getElementById(this.options.captionId);
        this.closeBtn = document.getElementsByClassName(this.options.closeClass)[0];

        if (!this.modal || !this.modalImg) {
            console.warn('Image gallery modal elements not found');
            return;
        }

        this.bindEvents();
        this.setupKeyboardNavigation();
        this.setupTouchGestures();
    }

    bindEvents() {
        // Close button click
        if (this.closeBtn) {
            this.closeBtn.onclick = () => this.closeModal();
        }

        // Click outside modal to close
        this.modal.onclick = (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        };

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.closeModal();
            }
        });

        // Prevent body scroll when modal is open
        this.modal.addEventListener('wheel', (e) => {
            if (this.modal.style.display === 'block') {
                e.preventDefault();
            }
        }, { passive: false });
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (this.modal.style.display !== 'block') return;

            // Arrow keys for navigation if multiple images
            const allImages = document.querySelectorAll('[data-gallery-image]');
            const currentIndex = Array.from(allImages).findIndex(img =>
                img.src === this.modalImg.src
            );

            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                this.openModal(allImages[currentIndex - 1].src, allImages[currentIndex - 1].alt);
            } else if (e.key === 'ArrowRight' && currentIndex < allImages.length - 1) {
                this.openModal(allImages[currentIndex + 1].src, allImages[currentIndex + 1].alt);
            }
        });
    }

    setupTouchGestures() {
        let touchStartX = 0;
        let touchEndX = 0;

        this.modal.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.modal.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) < swipeThreshold) return;

        const allImages = document.querySelectorAll('[data-gallery-image]');
        const currentIndex = Array.from(allImages).findIndex(img =>
            img.src === this.modalImg.src
        );

        if (diff > 0 && currentIndex < allImages.length - 1) {
            // Swipe left - next image
            this.openModal(allImages[currentIndex + 1].src, allImages[currentIndex + 1].alt);
        } else if (diff < 0 && currentIndex > 0) {
            // Swipe right - previous image
            this.openModal(allImages[currentIndex - 1].src, allImages[currentIndex - 1].alt);
        }
    }

    openModal(imageSrc, imageAlt = '') {
        this.modal.style.display = 'block';
        this.modalImg.src = imageSrc;

        // Set caption from alt text or filename
        if (imageAlt) {
            this.caption.textContent = imageAlt;
        } else {
            // Extract filename from path and clean it up
            const filename = imageSrc.split('/').pop().replace(/\.(png|jpg|jpeg|gif|webp)$/i, '');
            this.caption.textContent = filename.replace(/[_-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Add loading state
        this.modalImg.style.opacity = '0';

        // Handle image loading
        if (this.modalImg.complete) {
            this.onImageLoad();
        } else {
            this.modalImg.onload = () => this.onImageLoad();
            this.modalImg.onerror = () => this.onImageError();
        }

        // Emit custom event
        this.emitEvent('gallery:open', { imageSrc, imageAlt });
    }

    onImageLoad() {
        this.modalImg.style.opacity = '1';
        this.modalImg.style.transition = 'opacity 0.3s ease';
    }

    onImageError() {
        this.caption.textContent = 'Image failed to load';
        this.modalImg.style.opacity = '0.5';
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = '';

        // Clear image source
        this.modalImg.src = '';
        this.caption.textContent = '';

        // Emit custom event
        this.emitEvent('gallery:close');
    }

    emitEvent(eventName, data = {}) {
        const event = new CustomEvent(eventName, { detail: data });
        document.dispatchEvent(event);
    }

    // Static method to create gallery from HTML structure
    static createFromStructure(container, options = {}) {
        const gallery = new ImageGallery(options);

        // Find all gallery images in container
        const images = container.querySelectorAll('[data-gallery-image] > img, .screenshot-container img');

        images.forEach(img => {
            const container = img.closest('.screenshot-container, [data-gallery-image]');
            if (container) {
                container.style.cursor = 'pointer';
                container.addEventListener('click', (e) => {
                    e.preventDefault();
                    gallery.openModal(img.src, img.alt || img.title);
                });
            }
        });

        return gallery;
    }
}

// Auto-initialize gallery when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Look for gallery containers
    const galleryContainers = document.querySelectorAll('.gallery-container, [data-gallery]');

    if (galleryContainers.length > 0) {
        galleryContainers.forEach(container => {
            ImageGallery.createFromStructure(container);
        });
    } else {
        // Fallback - initialize globally
        window.imageGallery = new ImageGallery();

        // Make openModal globally available
        window.openModal = (imageSrc, imageAlt = '') => {
            window.imageGallery.openModal(imageSrc, imageAlt);
        };
    }
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageGallery;
}

// Global access
window.ImageGallery = ImageGallery;