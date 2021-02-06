import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

const listOne = [
  {
    id: 'a1',
    img: ['hot_00', 'hot_01'],
    title: 'Host of Trust (Kemenkeu)',
    tag: ['HTML', 'SCSS', 'JavaScript', 'React JS', 'Next JS'],
    url: null
  },
  {
    id: 'a2',
    img: [
      'foodbroadmin_00',
      'foodbroadmin_01',
      'foodbroadmin_02',
      'foodbroadmin_03'
    ],
    title: 'FOODBRO Admin',
    tag: ['HTML', 'SCSS', 'JavaScript', 'React JS'],
    url: null
  },
  {
    id: 'a3',
    img: ['kamiadmin_00', 'kamiadmin_01'],
    title: 'KAMI Backoffice',
    tag: ['HTML', 'SCSS', 'JavaScript', 'React JS', 'Next JS'],
    url: null
  }
];

const listTwo = [
  {
    id: 'b1',
    img: ['xeni_00', 'xeni_01', 'xeni_02'],
    title: 'Xeni Keyboard (Xendit)',
    tag: ['HTML', 'SCSS', 'JavaScript', 'React JS', 'Next JS'],
    url: null
  },
  {
    id: 'b2',
    img: [
      'sidely_00',
      'sidely_01',
      'sidely_02',
      'sidely_03',
      'sidely_04',
      'sidely_05',
      'sidely_06'
    ],
    title: 'Sidely',
    tag: ['HTML', 'SCSS', 'JavaScript', 'React JS'],
    extraTag: ['Map', 'Trello Like Card Management', 'Dynamic Form Builder'],
    url: null
  },
  {
    id: 'b3',
    img: ['sahamrakyatadmin_00', 'sahamrakyatadmin_01', 'sahamrakyatadmin_02'],
    title: 'Saham Rakyat Backoffice',
    tag: ['HTML', 'SCSS', 'JavaScript', 'React JS', 'Next JS'],
    url: null
  }
];

const PortfolioAdmin = () => (
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
                    data.tag.map((vl, index) => (
                      <Badge color="default" className="mr-1" key={index}>
                        {vl}
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
                    data.tag.map(tag => (
                      <Badge color="default" className="mr-1" key={tag}>
                        {tag}
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

export default PortfolioAdmin;
