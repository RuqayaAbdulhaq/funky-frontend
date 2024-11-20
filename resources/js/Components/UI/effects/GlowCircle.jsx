export default function GlowCircle(props){
    return(
        <>
        <div className={` glowy-ellipse absolute ${props.className}`}></div>

<style>
    {`
    .glowy-ellipse {
    width: 500px;
    height: 500px;
    position: relative;
    background: linear-gradient(
      135deg,
      #CDE5EA 0%,
      #0792b2 100%
    );
    opacity: 0.35;
    border-radius: 50%; /* Creates an ellipse-like shape */
    filter: blur(15px);
  }
    `}
  
</style>
        </>
    );
}