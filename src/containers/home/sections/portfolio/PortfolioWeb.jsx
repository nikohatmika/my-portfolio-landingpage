import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

const listOne = [
  {
    id: 'a1',
    img: ['mansek_00', 'mansek_01', 'mansek_02'],
    title: 'Mandiri Sekuritas',
    tag: ['HTML', 'SCSS', 'JavaScript', 'React JS', 'Next JS'],
    url: null
  },
  {
    id: 'a2',
    img: ['foodbro_00', 'foodbro_01', 'foodbro_02', 'foodbro_03', 'foodbro_04'],
    title: 'FOODBRO',
    tag: ['HTML', 'SCSS', 'JavaScript', 'React JS', 'Next JS'],
    url: 'https://foodbro.co'
  },
  {
    id: 'a3',
    img: ['farhana_00', 'farhana_01', 'farhana_02'],
    title: 'Farhana',
    tag: ['HTML', 'SCSS', 'JavaScript', 'TypeScript', 'React JS', 'Ionic'],
    extraTag: ['Progressive Web App', 'Web & Mobile Hybrid'],
    url: null
  }
];

const listTwo = [
  {
    id: 'b1',
    img: ['kami_00', 'kami_01', 'kami_02'],
    title: 'KAMI',
    tag: ['HTML', 'SCSS', 'JavaScript', 'React JS', 'Next JS'],
    url: 'https://kami.id'
  },
  {
    id: 'b2',
    img: ['sahamrakyat_00', 'sahamrakyat_01', 'sahamrakyat_02'],
    title: 'Saham Rakyat',
    tag: ['HTML', 'SCSS', 'JavaScript', 'React JS', 'Next JS'],
    url: null
  }
];

const PortfolioWeb = () => (
  <>
    <Col className="ml-auto mr-auto" md="12">
      <Row className="collections">
        <Col md="6">
          {listOne.map(data => (
            <a href="javascript::void();" className="card-parent" key={data.id}>
              <img
                alt="..."
                className="img-raised"
                src={require(`@images/portfolio/${data.img[0]}.png`)}
              />
              <div className="card-absolute">
                <div>
                  <Badge color="neutral">{data.title}</Badge>
                </div>

                <div className="d-flex justify-content-center">
                  {data.tag &&
                    data.tag.length > 0 &&
                    data.tag.map(vl => (
                      <Badge color="default" className="mr-1" key={vl}>
                        {vl}
                      </Badge>
                    ))}
                </div>

                <div className="d-flex justify-content-center">
                  {data.extraTag &&
                    data.extraTag.length > 0 &&
                    data.extraTag.map(tag => (
                      <Badge color="default" className="mr-1" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                </div>

                {data.url && (
                  <div>
                    <Badge color="info">
                      <a href={data.url} target="_blank">
                        Link
                      </a>
                    </Badge>
                  </div>
                )}
              </div>
            </a>
          ))}
        </Col>

        <Col md="6">
          {listTwo.map(data => (
            <a href="javascript::void();" className="card-parent" key={data.id}>
              <img
                alt="..."
                className="img-raised"
                src={require(`@images/portfolio/${data.img[0]}.png`)}
              />
              <div className="card-absolute">
                <div>
                  <Badge color="neutral">{data.title}</Badge>
                </div>

                <div className="d-flex justify-content-center">
                  {data.tag &&
                    data.tag.length > 0 &&
                    data.tag.map(vl => (
                      <Badge color="default" className="mr-1" key={vl}>
                        {vl}
                      </Badge>
                    ))}
                </div>

                <div className="d-flex justify-content-center">
                  {data.extraTag &&
                    data.extraTag.length > 0 &&
                    data.extraTag.map(tag => (
                      <Badge color="default" className="mr-1" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                </div>

                {data.url && (
                  <div>
                    <Badge color="info">
                      <a href={data.url} target="_blank">
                        Link
                      </a>
                    </Badge>
                  </div>
                )}
              </div>
            </a>
          ))}
        </Col>
      </Row>
    </Col>
  </>
);

export default PortfolioWeb;
