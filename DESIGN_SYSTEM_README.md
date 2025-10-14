# Portfolio Design System

This design system provides a reusable CSS framework for creating consistent, modern portfolio pages. It includes shared styles, components, and utilities that can be used across all pages in your portfolio.

## 📁 File Structure

```
portfolio/
├── css/
│   └── styles.css          # Main stylesheet with all reusable styles
├── details/
│   ├── hr_payroll_details.html
│   └── project_template.html  # Template for new project pages
├── index.html              # Main portfolio page
└── README.md
```

## 🎨 Design System Features

### CSS Variables
The design system uses CSS custom properties for consistent theming:

```css
:root {
    /* Colors */
    --primary-blue: #3b82f6;
    --primary-blue-light: #60a5fa;
    --background-card: rgba(15, 23, 42, 0.6);
    --text-primary: #e4e4e7;
    --text-muted: #94a3b8;
    
    /* Spacing */
    --spacing-sm: 10px;
    --spacing-md: 15px;
    --spacing-lg: 20px;
    --spacing-xl: 30px;
    
    /* Border Radius */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    
    /* Transitions */
    --transition-fast: 0.3s ease;
    --transition-smooth: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Reusable Components

#### Cards
```html
<div class="card">
    <div class="card-content">
        <h3 class="heading-secondary">Card Title</h3>
        <p class="text-secondary">Card content goes here</p>
    </div>
</div>
```

#### Buttons
```html
<a href="#" class="btn">Default Button</a>
<a href="#" class="btn btn-primary">Primary Button</a>
<a href="#" class="btn btn-large">Large Button</a>
```

#### Sections
```html
<div class="section">
    <h2 class="section-title">Section Title</h2>
    <p class="text-secondary">Section content</p>
</div>
```

#### Grid Systems
```html
<div class="grid grid-2">     <!-- 2 columns -->
<div class="grid grid-3">     <!-- 3 columns -->
<div class="grid grid-4">     <!-- 4 columns -->
<div class="grid grid-auto">  <!-- Auto-fit columns -->
```

### Typography Classes
- `.heading-primary` - Large gradient heading
- `.heading-secondary` - Medium gradient heading
- `.text-primary` - Primary text color
- `.text-secondary` - Secondary text color
- `.text-muted` - Muted text color
- `.text-gradient` - Gradient text effect

### Utility Classes
- `.text-center`, `.text-left`, `.text-right` - Text alignment
- `.mb-sm`, `.mb-md`, `.mb-lg`, `.mb-xl` - Margin bottom
- `.mt-sm`, `.mt-md`, `.mt-lg`, `.mt-xl` - Margin top
- `.p-sm`, `.p-md`, `.p-lg`, `.p-xl` - Padding
- `.flex`, `.flex-col`, `.items-center` - Flexbox utilities
- `.hidden`, `.block` - Display utilities

## 🚀 Creating New Project Pages

### Using the Template

1. **Copy the template:**
   ```bash
   cp details/project_template.html details/your_project_name.html
   ```

2. **Replace placeholders:**
   - `[PROJECT_NAME]` - Your project title
   - `[PROJECT_ICON]` - Emoji or icon for the project
   - `[PROJECT_SUBTITLE]` - Brief project description
   - `[PROJECT_DESCRIPTION]` - Detailed project description
   - `[PROJECT_DATE]` - Project completion date
   - `[PROJECT_SCOPE]` - Project scope (e.g., "Personal Project", "Enterprise")
   - `[PROJECT_PLATFORM]` - Platform (e.g., "Web-Based", "Mobile App")

3. **Add technologies:**
   ```html
   <div class="tech-card">
       <div class="tech-name">React</div>
       <div class="tech-version">Frontend Framework</div>
   </div>
   ```

4. **Add features:**
   ```html
   <div class="feature-card">
       <div class="feature-icon">🚀</div>
       <h3 class="feature-title">Performance Optimization</h3>
       <p class="feature-description">
           Implemented lazy loading and code splitting for faster load times.
       </p>
   </div>
   ```

5. **Add screenshots:**
   ```html
   <img src="screenshots/dashboard.jpg" alt="Dashboard View" 
        style="width: 100%; border-radius: var(--radius-md);">
   ```

### Linking from Main Portfolio

Update your `index.html` project data:

```javascript
{
    id: 11,
    title: "Your New Project",
    description: "Brief description of your project",
    icon: "🎯",
    category: "web",
    tech: ["React", "Node.js", "MongoDB"],
    detailsUrl: "./details/your_project_name.html"
}
```

## 🎨 Customizing the Design System

### Adding New Colors
Add new color variables to `css/styles.css`:

```css
:root {
    --success-green: #10b981;
    --warning-orange: #f59e0b;
    --error-red: #ef4444;
}
```

### Creating New Components
Add component styles to `css/styles.css`:

```css
.custom-component {
    background: var(--background-card);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-md);
    padding: var(--spacing-lg);
    transition: var(--transition-fast);
}

.custom-component:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
}
```

### Responsive Design
The design system includes responsive breakpoints:

```css
@media (max-width: 768px) {
    .your-component {
        /* Mobile styles */
    }
}
```

## 📱 Responsive Features

- **Mobile-first design** - Optimized for mobile devices
- **Flexible grids** - Automatically adapts to screen size
- **Touch-friendly** - Large buttons and touch targets
- **Readable typography** - Scales appropriately on all devices

## 🔧 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📝 Best Practices

1. **Use semantic HTML** - Always use proper HTML elements
2. **Follow the naming convention** - Use kebab-case for CSS classes
3. **Leverage CSS variables** - Use existing variables instead of hardcoded values
4. **Test responsiveness** - Always test on different screen sizes
5. **Keep it consistent** - Use the design system components instead of custom styles

## 🚀 Performance Tips

1. **Minimize custom CSS** - Use existing classes when possible
2. **Optimize images** - Compress screenshots and use appropriate formats
3. **Lazy load content** - Consider lazy loading for heavy content
4. **Use CSS variables** - They're more performant than repeated values

## 📞 Support

If you need help with the design system or want to add new features, refer to the existing code in `css/styles.css` and follow the established patterns.
