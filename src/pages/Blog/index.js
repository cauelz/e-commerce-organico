import React from "react";
import bannerBlog from '../../assets/blog-organico-1.png';
import Card from "react-bootstrap/Card";
import BlogButton from "../../components/Button";
import "../Blog/style.css";

const BlogPage = () => {
    return (
        <>
            <header className='blog-header'>
                <img
                    src={bannerBlog}
                    className="banner-blog"
                    alt="banner-blog"
                />
            </header>
            <section>
                <div className="row row-cols-2 row-cols-md-1 mx-0" >
                    <div className="col-md-4">
                        <Card style={{ width: '23rem' }} id="card1">
                            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5b625f0d96d455ef934bf48c/1561745268571-Y5NCFEK8RDPMDQT7VLEC/ke17ZwdGBToddI8pDm48kKJv-aO3J5juaDXx2EYMqp1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyw47c-nJBBHNZ4h7h4Tq8iVZGn8qfHCFTN-PhSu7i9yVpKEAzGHcwgiLiG1ignBos/001.jpg?format=750w" class="card-img-top" alt="Comida orgânica tem sabor?" />
                            <Card.Body>
                                <Card.Title>Comida orgânica tem mesmo sabor?</Card.Title>
                                <Card.Text className="card-text">
                                    Se esse boato te espanta toda vez que  você faz compras no mercado, não tema: estamos aqui para solucionar esse  mistério! Continue lendo e  descubra, de uma vez por todas, que a comida orgânica tem sabor!
                                    </Card.Text>
                                <BlogButton href="https://www.lemanjue.com/blog/2019/6/28/comida-orgnica-tem-sabor" />
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5b625f0d96d455ef934bf48c/1561778061718-APOEPQ4K0W1CZ1UIEXMG/ke17ZwdGBToddI8pDm48kKJv-aO3J5juaDXx2EYMqp1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyw47c-nJBBHNZ4h7h4Tq8iVZGn8qfHCFTN-PhSu7i9yVpKEAzGHcwgiLiG1ignBos/5.jpg" class="card-img-top" alt="Conheça 6 benefícios da comida orgânica" />
                            <Card.Body>
                                <Card.Title>Conheça 6 benefícios da comida orgânica</Card.Title>
                                <Card.Text className="card-text">
                                    As técnicas utilizadas na produção de grãos, vegetais, carnes, leite e até mesmo ovos orgânicos têm o objetivo de manter sua qualidade e respeitar o planeta. É por isso que esse tipo de alimento é uma tendência cada vez mais forte no mundo todo.
                                    </Card.Text>
                                <BlogButton href="https://blog.livup.com.br/conheca-6-beneficios-da-comida-organica/" />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '23rem' }} id="card2">
                            <Card.Img variant="top" src="https://www.tuacasa.com.br/wp-content/uploads/2018/02/horta-em-apartamento-1.jpg" class="card-img-top" alt="Horta em apartamento: como fazer, o que plantar" />
                            <Card.Body>
                                <Card.Title>Horta em apartamento: como fazer, o que plantar</Card.Title>
                                <Card.Text className="card-text">
                                Para quem mora em apartamento, espaço não é problema para cultivar uma horta. As plantas cabem em qualquer cantinho e são perfeitas para quem gosta de ter temperos e hortaliças fresquinhas sempre à mão. Além disso, levar um pouco de verde para casa traz mais vida e frescor para o ambiente.
                                    </Card.Text>
                                <BlogButton href="https://www.tuacasa.com.br/horta-em-apartamento/" />
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5b625f0d96d455ef934bf48c/1585697901861-T5B3XSXGUQQE30J5ZGIZ/ke17ZwdGBToddI8pDm48kLFCtkH88ggPObIDqRxlSC1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz_IQXlBhXnuPAnp1iWUDr5qjYhEFFuVbdh-DKTfXOKGEhGnZu5vdvjLeaQKVetcd8/ervas_.jpg?format=750w" class="card-img-top" alt="Alimentos essenciais para fortalecer imunidade" />
                            <Card.Body>
                                <Card.Title>Alimentos essenciais para fortalecer imunidade</Card.Title>
                                <Card.Text className="card-text">
                                Estamos em um momento em que um dos principais temas que devemos nos preocupar é a nossa imunidade. Além do mais, por orientação do Ministério da Saúde, no período de disseminação do coronavírus (COVID-19) devemos ficar em casa para nos proteger e evitar a proliferação do vírus.
                                    </Card.Text>
                                <BlogButton href="https://www.lemanjue.com/blog/alimentos-fortalecer-imunidade" />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '23rem' }} id="card3">
                            <Card.Img variant="top" src="https://s2.glbimg.com/omC_tgxbwwf4cZsygPX_Unvu14M=/620x550/bottom/e.glbimg.com/og/ed/f/original/2020/05/13/5z7a5293.jpg" class="card-img-top" alt="9 receitas com ingredientes sustentáveis" />
                            <Card.Body>
                                <Card.Title>9 receitas com ingredientes sustentáveis</Card.Title>
                                <Card.Text className="card-text">
                                Além de serem sustentáveis e ajudarem a preservar o meio ambiente, os alimentos orgânicos são mais saudáveis e saborosos. Listamos 9 pratos para quem quer degustar o sabor natural dos ingredientes.
                                    </Card.Text>
                                <BlogButton href="https://revistacasaejardim.globo.com/Casa-e-Comida/Receitas/noticia/2020/05/comida-organica-9-receitas-com-ingredientes-cultivados-de-maneira-sustentavel.html" />
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5b625f0d96d455ef934bf48c/1587473097411-HPSMNO1FLQJR69OZNP7U/ke17ZwdGBToddI8pDm48kB8phy-EIcf08up-SlcPMdtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIhvxinWu13u1QWbXxzb1o9HrFfo528rrFkZNAWhzH2V8/boaforma.png?format=1000w" class="card-img-top" alt="Como manter a boa forma durante a quarentena?" />
                            <Card.Body>
                                <Card.Title>Como manter a boa forma durante a quarentena?</Card.Title>
                                <Card.Text className="card-text">
                                É importante ressaltar que estresse e ansiedade aumentam o cortisol e consequentemente a inflamação, que está diretamente relacionada ao ganho de peso corporal, além de outros problemas consequentes a isso. Portanto, uma boa estratégia de manter nossa forma sem perder a saúde é modular estresse e ansiedade.
                                    </Card.Text>
                                <BlogButton href="https://www.lemanjue.com/blog/boa-forma-na-quarentena" />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogPage;