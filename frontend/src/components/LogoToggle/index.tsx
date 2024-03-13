import './styles.css'

export const LogoToogle = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <img
        src="/G81.svg"
        className="absolute opacity-0 fade"
        alt="G81 Tecnologia Interativa e Neurolinguística"
      />
      <img
        src="/G81_ICON.svg"
        className="absolute opacity-100 fadeLong"
        alt="G81 Tecnologia Interativa e Neurolinguística"
      />
    </div>
  )
}
