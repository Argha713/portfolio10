# Argha Sarkar - Portfolio Website

## 🎉 Modern .NET & AI Developer Portfolio

A professional, feature-rich portfolio website showcasing expertise in .NET development, AI integration, RAG systems, and LLM implementations.

---

## ✨ Features Implemented

### 🎨 **Design & Theme**
- **Modern Professional Theme** - Deep blue primary (#3B82F6) with warm orange accents (#F97316)
- **Dark mode by default** with smooth light/dark toggle
- **Animated hero section** with typewriter effect and floating gradients
- **Responsive design** - looks great on all devices

### 📄 **Pages & Sections**
1. **Home Page**
   - Animated hero with typewriter tagline
   - Services showcase (4 key services)
   - Featured projects (3 highlighted projects)
   - Animated skills visualization with progress bars
   - Live GitHub activity feed
   - Client testimonials
   - Contact form
   
2. **Projects Page**
   - 5 real projects from your experience
   - **Advanced filtering** by category AND technology stack
   - Problem → Solution → Impact framework
   - Links to GitHub repositories

3. **Blog Page**
   - Integrated with **Sanity.io CMS**
   - Category filtering
   - Reading progress bar
   - Social share buttons (Twitter, LinkedIn, Facebook, WhatsApp)
   - Newsletter subscription

### 🚀 **Interactive Features**
- ✅ Contact form with email notifications (Web3Forms integration)
- ✅ Resume/CV download button
- ✅ WhatsApp chat widget (appears after 3 seconds)
- ✅ Skills visualization with animated progress bars
- ✅ GitHub activity feed (fetches your latest 6 repos)
- ✅ Blog reading progress bar
- ✅ Social share buttons for blog posts
- ✅ Project filtering by tech stack
- ✅ Smooth scroll animations
- ✅ Toast notifications

---

## 📊 Your Real Data Integrated

All data from your LinkedIn profile has been integrated:

- **Name**: Argha Sarkar
- **Title**: .NET Developer Building AI-Powered Applications
- **Location**: Kolkata, West Bengal, India
- **Email**: argha2.sarkar@gmail.com
- **Phone**: +91 9903136302
- **GitHub**: https://github.com/Argha713

### Projects Included:
1. **Model Context Protocol (MCP) Server** - Open source .NET 8 AI integration
2. **Production RAG API** - Document Q&A with citations
3. **Dynamics 365 Business Central Connector** - Enterprise BI integration
4. **FinReporter** - Financial reporting system modernization
5. **Tally-EasyReports Sync Service** - Automated data synchronization

---

## 🔧 Setup Instructions

### 1. **Contact Form Setup (Required)**

The contact form uses Web3Forms (free tier available).

1. Go to https://web3forms.com
2. Sign up and get your **Access Key**
3. Open `/app/frontend/src/components/ContactForm.jsx`
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key:
   ```javascript
   access_key: 'your-actual-access-key-here'
   ```

### 2. **Sanity.io Blog Setup** ✅ ALREADY CONFIGURED

Your Sanity project is already connected:
- **Project ID**: xotxp0yd
- **API Token**: Already configured in `/app/frontend/src/config/sanity.js`

#### Create Blog Schema in Sanity Studio:

You need to set up the blog schema in your Sanity project. Here's how:

1. **Install Sanity CLI** (if not already installed):
   ```bash
   npm install -g @sanity/cli
   ```

2. **Navigate to your Sanity project** or create a new Studio:
   ```bash
   sanity init
   ```

3. **Create the following schema files** in your Sanity Studio's `schemas` folder:

**schemas/post.js**:
```javascript
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief summary of the post'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Reading Time',
      type: 'string',
      description: 'e.g., "5 min read"'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true}
        }
      ]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    }
  ],
  orderings: [
    {
      title: 'Publishing date new->old',
      name: 'publishingDateDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    }
  ]
}
```

**schemas/category.js**:
```javascript
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
```

**schemas/author.js**:
```javascript
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}
```

4. **Register schemas** in `schemas/index.js`:
```javascript
import post from './post'
import category from './category'
import author from './author'

export const schemaTypes = [post, category, author]
```

5. **Deploy to Sanity**:
```bash
sanity deploy
```

6. **Create your first blog post** in Sanity Studio!

### 3. **Resume Upload**

1. Export your resume as PDF named: `Argha_Sarkar_Resume.pdf`
2. Place it in: `/app/frontend/public/resume/Argha_Sarkar_Resume.pdf`

---

## 📝 Customization Guide

### Update Personal Information

Edit `/app/frontend/src/data/mock.js`:

```javascript
export const profile = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "+91 1234567890",
  // ... update other fields
};
```

### Add/Edit Projects

In the same file, update the `projects` array with your real project details.

### Modify Theme Colors

Edit `/app/frontend/src/index.css` to change the color scheme:

```css
:root {
  --primary: 217 91% 60%; /* Blue */
  --accent: 24 95% 53%; /* Orange */
  /* ... other colors */
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Set environment variable:
   - `REACT_APP_BACKEND_URL` (if using backend)
5. Deploy!

### Build for Production

```bash
cd /app/frontend
yarn build
```

The optimized build will be in `/app/frontend/build/`.

---

## 📦 Technologies Used

### Frontend
- **React** 19 with React Router
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **TypeAnimation** for hero typewriter effect
- **React Share** for social sharing
- **Sanity.io** for blog CMS
- **Lucide React** for icons

### Backend (Optional - for contact form)
- **FastAPI** (Python)
- **MongoDB** (not needed for static deployment)

---

## 🎯 Next Steps

1. ✅ **Set up contact form** (add Web3Forms access key)
2. ✅ **Upload your resume** to `/public/resume/`
3. ✅ **Create blog schema** in Sanity Studio
4. ✅ **Write your first blog post** in Sanity
5. ✅ **Deploy to Vercel**

---

## 📞 Support

If you need help customizing or have questions:
- Email: argha2.sarkar@gmail.com
- LinkedIn: https://linkedin.com/in/argha-sarkar-12538a21a
- GitHub: https://github.com/Argha713

---

## ⚡ Performance Features

- Lazy loading images
- Optimized animations
- Code splitting
- Tree shaking
- Production-ready build

---

**Built with ❤️ for showcasing .NET & AI expertise**
