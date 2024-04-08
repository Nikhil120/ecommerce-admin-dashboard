function useReadImg(file, img) {
  try {
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      document.getElementById(img).src = e.target.result;
    });
    reader.readAsDataURL(file);
  } catch (error) {
    console.log(error);
  }
}
export default useReadImg;
