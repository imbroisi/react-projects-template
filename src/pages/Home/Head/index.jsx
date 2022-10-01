import imgSrc from 'assets/head-image.jpeg';
import { Container, Image } from './styles';

const Head = () => {
  const handleClick = () => {
    window.open('https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsvtiHZWHs6vqmOwyVgRZ7CY0kx4c4iCok0GRUUuMVTZOz-v2XO39JQjamoFMx1Quu-l-6197-zSP9n5lcIiB737ESXYwGfPgwl4s8FX_2vp__wFp3BR69fBE3l3uiPfIF8hJgWk2MapsYmW6Ato6vhvWeo5bFKnD3S3dCf7J-z8SvPjmo-T1ihU5HnKaFvUPEEIPBbu1NVMTgcI75CUY24Kq22TPBbgbXKCZ2sAisXeMuU6HqWq7cVCwJ5BKbUjA2tsmAmXMcw86y_nwXmBzELEdCTbsm1jqu5bbECt4UxgRtS_cnl6aB9T4BQs-QxWMnY8WaixINImVH-_grML&amp;sai=AMfl-YRz4VoxHn5rxkslAGPxrxYPDkR1ftTFeeG7PJq8DcllgCVXvaEKsxWYo_KwIYZwz0ma7wvo6nQRirdLDyEWBAhv_JWS8jEhY2UNIhqAs37CmwgeMGpfQe2hffKQiPG55MrpLdAqlA&amp;sig=Cg0ArKJSzHKKoIv1S-KOEAE&amp;fbs_aeid=[gw_fbsaeid]&amp;urlfix=1&amp;adurl=https://ad.doubleclick.net/ddm/trackclk/N95805.279282CINEPLEX/B28289628.342513318;dc_trk_aid=536531576;dc_trk_cid=177198764;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=', true);
  };

  return (
    <Container onClick={handleClick}>
      <Image src={imgSrc} />
    </Container>
  );
};

export default Head;
