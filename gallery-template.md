# Universal Gallery Template

This template can be used for all future project pages to create consistent image galleries.

## HTML Structure

```html
<!-- Include the gallery CSS -->
<link rel="stylesheet" href="assets/css/gallery.css">

<!-- Gallery Container -->
<div class="gallery-container" data-gallery>
    <div class="gallery-grid cols-1 md:cols-2 lg:cols-3 gap-8">
        <!-- Gallery Item Template -->
        <div class="gallery-card">
            <div class="screenshot-container" data-gallery-image>
                <img src="path/to/image.jpg"
                     alt="Descriptive Alt Text"
                     title="More detailed description">
                <div class="gallery-hover-overlay">
                    <div class="gallery-hover-content">
                        <i class="fas fa-search-plus"></i>
                        <p>Click to enlarge</p>
                    </div>
                </div>
            </div>
            <div class="gallery-card-content">
                <h4 class="gallery-card-title">Image Title</h4>
                <p class="gallery-card-description">Brief description of what the image shows.</p>
            </div>
        </div>

        <!-- Repeat for more images -->
    </div>
</div>

<!-- Include the gallery script at bottom of body -->
<script src="assets/js/gallery.js"></script>
```

## Available Classes

### Grid Layouts
- `gallery-grid` - Main grid container
- `cols-1` - Single column
- `cols-2` - Two columns
- `cols-3` - Three columns
- `cols-4` - Four columns

### Aspect Ratios
- `screenshot-container` - Default 16:9 aspect ratio
- `screenshot-container.portrait` - 3:4 aspect ratio
- `screenshot-container.square` - 1:1 aspect ratio
- `screenshot-container.wide` - 21:9 aspect ratio
- `screenshot-container.auto` - Auto aspect ratio

### Responsive Classes
- `md:cols-2` - 2 columns on medium screens and up
- `lg:cols-3` - 3 columns on large screens and up

## Example Usage

### Basic Gallery
```html
<div class="gallery-container" data-gallery>
    <div class="gallery-grid cols-3 gap-6">
        <div class="gallery-card">
            <div class="screenshot-container" data-gallery-image>
                <img src="screenshots/project/image1.jpg" alt="Login Screen">
                <div class="gallery-hover-overlay">
                    <div class="gallery-hover-content">
                        <i class="fas fa-search-plus"></i>
                        <p>Click to enlarge</p>
                    </div>
                </div>
            </div>
            <div class="gallery-card-content">
                <h4 class="gallery-card-title">Login Screen</h4>
                <p class="gallery-card-description">Secure user authentication interface</p>
            </div>
        </div>
    </div>
</div>
```

### Mixed Aspect Ratios
```html
<div class="gallery-container" data-gallery>
    <div class="gallery-grid cols-2 lg:cols-3 gap-6">
        <!-- Standard 16:9 image -->
        <div class="gallery-card">
            <div class="screenshot-container" data-gallery-image>
                <img src="image1.jpg" alt="Dashboard">
            </div>
            <div class="gallery-card-content">
                <h4>Dashboard</h4>
            </div>
        </div>

        <!-- Portrait image -->
        <div class="gallery-card">
            <div class="screenshot-container portrait" data-gallery-image>
                <img src="image2.jpg" alt="Mobile View">
            </div>
            <div class="gallery-card-content">
                <h4>Mobile View</h4>
            </div>
        </div>

        <!-- Square image -->
        <div class="gallery-card">
            <div class="screenshot-container square" data-gallery-image>
                <img src="image3.jpg" alt="Icon Design">
            </div>
            <div class="gallery-card-content">
                <h4>Icon Design</h4>
            </div>
        </div>
    </div>
</div>
```

## Features

### Automatic Functionality
- ✅ Click to open modal
- ✅ Keyboard navigation (Arrow keys, ESC)
- ✅ Touch gestures (swipe left/right)
- ✅ Click outside to close
- ✅ Loading states
- ✅ Error handling
- ✅ Responsive design
- ✅ Accessibility features

### Customization Options
- Different grid layouts
- Multiple aspect ratios
- Custom captions
- Hover effects
- Loading animations
- Error states

## Integration Steps

1. **Include CSS**: Add `<link rel="stylesheet" href="assets/css/gallery.css">` to head
2. **Add HTML**: Use the template structure above
3. **Include Script**: Add `<script src="assets/js/gallery.js"></script>` before closing body tag
4. **Add Images**: Place your images in appropriate folders
5. **Customize**: Adjust grid columns, aspect ratios, and content as needed

## File Organization

```
project-folder/
├── index.html
├── assets/
│   ├── css/
│   │   └── gallery.css
│   └── js/
│       └── gallery.js
└── screenshots/
    └── project-name/
        ├── image1.jpg
        ├── image2.png
        └── image3.jpg
```

## Best Practices

1. **Image Optimization**: Use properly sized images (max 1920px width)
2. **Alt Text**: Provide descriptive alt text for accessibility
3. **Consistent Naming**: Use consistent file naming conventions
4. **Responsive Images**: Test on different screen sizes
5. **Loading Speed**: Optimize image file sizes

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## Troubleshooting

### Images not showing
- Check file paths
- Verify image files exist
- Check for case sensitivity

### Modal not opening
- Ensure gallery.js is included
- Check for JavaScript errors
- Verify data-gallery-image attribute

### Styling issues
- Ensure gallery.css is loaded
- Check for conflicting CSS
- Verify Tailwind CSS compatibility