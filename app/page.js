export default function Home() {
  let name = "park";
  let link = "http://naver.com";
  return (
    <div>
      <h4 className='title'>덕춘후레쉬</h4>
      <p className='title-sub'>하윙 {name}</p>
      <a href={link}>a</a>
    </div>
  );
}
