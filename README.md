# Portfolio Website - Nguyen Dinh Dat

## Cấu trúc thư mục

```
├── index.html          # File chính được build tự động
├── css/
│   └── styles.css      # CSS tùy chỉnh
├── js/
│   └── script.js       # JavaScript tùy chỉnh  
├── components/         # Các component HTML
│   ├── header.html     # Phần header
│   ├── navigation.html # Thanh navigation
│   ├── about.html      # Phần About Me
│   └── footer.html     # Phần footer
├── images/            # Hình ảnh
│   ├── avatar.jpg     # Ảnh đại diện
│   └── background.jpg # Ảnh nền
├── build.js          # Script build website
└── package.json      # Quản lý dependencies và scripts
```

## Cách sử dụng

### Build website:
```bash
npm run build
```

### Chạy development server:
```bash
npm run dev
```

### Build và chạy:
```bash
npm start
```

## Quy trình phát triển

1. **Chỉnh sửa components**: Sửa các file trong thư mục `components/`
2. **Chỉnh sửa styles**: Sửa file `css/styles.css`
3. **Chỉnh sửa JavaScript**: Sửa file `js/script.js`
4. **Build**: Chạy `npm run build` để tạo `index.html` mới
5. **Test**: Chạy `npm run dev` để xem trước
6. **Deploy**: Push lên GitHub để auto-deploy

## Tính năng

- ✅ **Modular**: Code được tách thành các component riêng biệt
- ✅ **Auto-build**: Script tự động build từ components
- ✅ **Responsive**: Tối ưu cho mọi thiết bị
- ✅ **Auto-deploy**: Tự động deploy lên GitHub Pages
- ✅ **Modern**: Sử dụng Tailwind CSS và JavaScript ES6+

## Auto-deployment

Website tự động deploy lên `https://datdinh173011.github.io` khi push code lên GitHub.