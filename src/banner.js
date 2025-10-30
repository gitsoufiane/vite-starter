import styles from './banner.module.css';

export const addBanner = (text) => {
  console.log(styles);
  const banner = document.querySelector('#content');

  banner.textContent = text;
  banner.classList.add(styles.bannerText);
};
