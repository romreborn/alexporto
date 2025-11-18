# Image Editing Guide for Blurring Logos in Screenshots

## Overview
This guide provides step-by-step instructions for blurring sensitive information and logos in your School Management System screenshots using various tools.

## Screenshots to Edit
Located in: `screenshots/school_management_system/`

1. Form Login.png
2. FormPendaftaran.png
3. Form Pendaftaran 2.png
4. Proses Pendaftaran 1.png
5. Proses Pendaftaran 2 & Negosiasi Harga.png
6. EditHargaGelombang.png
7. FormPembayaranAdm.png
8. FormPembayaranSPP.png
9. ValidasiPembayaran.png
10. BuktiPendaftaran.png
11. LaporanPembayaran.png

## Methods to Blur/Hide Sensitive Information

### Method 1: Using Photoshop (Recommended)
1. Open the image in Photoshop
2. Select the **Elliptical Marquee Tool** (M)
3. Draw a selection around the logo/sensitive area
4. Go to **Filter > Blur > Gaussian Blur**
5. Set radius to 8-15 pixels (adjust as needed)
6. Click **OK**
7. Save the image (File > Save As or Export)

### Method 2: Using GIMP (Free Alternative)
1. Open the image in GIMP
2. Select the **Ellipse Select Tool** (E)
3. Draw a selection around the logo/sensitive area
4. Go to **Filters > Blur > Gaussian Blur**
5. Set **Horizontal** and **Vertical** radius to 8-15 pixels
6. Click **OK**
7. Export the image (File > Export As)

### Method 3: Using Paint.NET (Free Windows Tool)
1. Open the image in Paint.NET
2. Select the **Ellipse Tool**
3. Draw around the logo/sensitive area
4. Go to **Effects > Blurs > Gaussian Blur**
5. Set radius to 8-15 pixels
6. Click **OK**
7. Save the image

### Method 4: Using Online Tools
1. Visit [Photopea.com](https://www.photopea.com/) (Free Photoshop alternative)
2. Open your image (File > Open)
3. Use the **Ellipse Tool** to select the logo
4. Go to **Filter > Blur > Gaussian Blur**
5. Set radius and apply
6. Save the image

### Method 5: Using Mobile Apps
**For iOS/Android:**
- **Snapseed**: Use the "Selective" tool to blur specific areas
- **Picsart**: Use the "Blur" tool with brush
- **Photoshop Express**: Has blur tools for selective editing

## Areas to Blur in Each Screenshot

### 1. Form Login.png
- School logo/header
- Any school name or identifying text
- Copyright notices

### 2. FormPendaftaran.png
- School logo
- School name
- Address information
- Contact details

### 3. Form Pendaftaran 2.png
- School logo
- Personal information fields (sample data)
- Contact information

### 4. Proses Pendaftaran 1.png
- Student photos
- Personal identification numbers
- School name/logo

### 5. Proses Pendaftaran 2 & Negosiasi Harga.png
- Price negotiation details
- Student names
- Financial information

### 6. EditHargaGelombang.png
- Pricing tables
- School name
- Financial data

### 7. FormPembayaranAdm.png
- Payment amounts
- Student names
- School logo

### 8. FormPembayaranSPP.png
- Payment details
- Student information
- Bank details

### 9. ValidasiPembayaran.png
- Payment confirmations
- Transaction IDs
- Personal data

### 10. BuktiPendaftaran.png
- Registration certificates
- Student photos
- School seal/logo

### 11. LaporanPembayaran.png
- Financial reports
- Student names
- Payment histories

## Pro Tips for Professional Results

### 1. Consistency
- Use the same blur radius across all images
- Maintain consistent shape for blurred areas
- Keep blur style uniform

### 2. Natural Appearance
- Feather the edges of selections (1-2 pixels)
- Don't over-blur (8-12 pixels is usually enough)
- Match blur intensity with image resolution

### 3. What to Blur
- **Logos and branding**
- **School names and addresses**
- **Student photos and names**
- **Financial information**
- **Contact details**
- **ID numbers**
- **Copyright notices**

### 4. What NOT to Blur
- **UI elements and buttons**
- **Form field labels**
- **Navigation menus**
- **General layout structure**
- **Technology stack indicators**

## Quick Workflow

1. **Backup Originals**: Keep original screenshots in a separate folder
2. **Batch Process**: Edit all screenshots in one session for consistency
3. **Quality Check**: Review each image after editing
4. **File Naming**: Keep the same filenames after editing
5. **Replace**: Overwrite the original files in the screenshots folder

## Alternative: Use CSS Masks (Temporary Solution)

If you need a quick temporary solution, you can use CSS to create overlay masks:

```css
.screenshot-container {
    position: relative;
}

.blur-overlay {
    position: absolute;
    background: rgba(0,0,0,0.8);
    border-radius: 50%;
    /* Position and size as needed */
}
```

## Final Checklist

- [ ] All logos are blurred
- [ ] Personal information is hidden
- [ ] Financial data is obscured
- [ ] School names are protected
- [ ] Contact details are removed
- [ ] Images maintain professional appearance
- [ ] File sizes are optimized
- [ ] All images have consistent editing style

After editing the images, replace the original files in the `screenshots/school_management_system/` folder and the website will display the properly blurred versions.