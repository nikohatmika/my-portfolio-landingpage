import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

const listOne = [
  {
    id: 1,
    img: 'legocar.png',
    title: 'Virtual Showroom',
    tag: ['React JS', 'SCSS', 'HTML', 'REST API']
  },
  {
    id: 2,
    img: 'kaptiva.png',
    title: 'Kaptiva',
    tag: ['React JS', 'SCSS', 'HTML']
  },
  {
    id: 3,
    img: 'loccitane.png',
    title: 'Loccitane Register Form',
    tag: ['React JS', 'SCSS', 'HTML', 'SOAP API']
  },
  {
    id: 4,
    img: 'mc-master.png',
    title: 'MC Master',
    tag: ['React JS', 'SCSS', 'HTML', 'Next JS']
  },
  {
    id: 5,
    img: 'steadfast.png',
    title: 'Steadfast',
    tag: ['Wordpress', 'CSS', 'HTML'],
    url: 'https://www.steadfastmoneytransfer.com/'
  },
  {
    id: 6,
    img: 'kami.png',
    title: 'KAMI',
    tag: ['React JS', 'SCSS', 'HTML', 'Next JS'],
    url: 'https://kami.id'
  },
  {
    id: 7,
    img: 'halobro.png',
    title: 'Halobro',
    tag: ['React JS', 'SCSS', 'HTML', 'Next JS', 'Pusher']
  },
  {
    id: 7,
    img: 'halu.png',
    title: 'Halu',
    tag: ['React JS', 'Tailwind CSS', 'HTML', 'Next JS'],
    url: 'https://halu.co'
  }
];

const listTwo = [
  {
    id: 1,
    img: 'cbn.png',
    title: 'Cahaya Bagi Negeri',
    tag: ['React JS', 'SCSS', 'HTML', 'REST API', 'SSR'],
    url: 'https://cahayabaginegeri.com/'
  },
  {
    id: 2,
    img: 'gonegolfing.png',
    title: 'Gone Golfing',
    tag: ['React JS', 'SCSS', 'HTML']
  },
  {
    id: 3,
    img: 'amartha.png',
    title: 'Amartha',
    tag: ['Wordpress', 'SCSS', 'HTML', 'SOAP API'],
    url: 'https://amartha.com/id_ID/'
  },
  {
    id: 4,
    img: 'mandiri-oao.png',
    title: 'Mandiri OAO',
    tag: ['React JS', 'SCSS', 'HTML', 'Next JS'],
    url: 'https://register.most.co.id/'
  },
  {
    id: 5,
    img: 'mandiri-ivr.png',
    title: 'Mandiri IVR',
    tag: ['React JS', 'CSS', 'HTML', 'Next JS']
  },
  {
    id: 6,
    img: 'jomblo.png',
    title: 'Jomblo',
    tag: ['React JS', 'CSS', 'HTML'],
    url: 'https://jomblo.com/'
  },
  {
    id: 7,
    img: 'sidelybuilder.png',
    title: 'Sidely Form Builder',
    tag: ['React JS', 'CSS', 'HTML', 'React drag n drop']
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
                src={require(`@images/portofolio/header/${data.img}`)}
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
                src={require(`@images/portofolio/header/${data.img}`)}
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
      </Row>
    </Col>
  </>
);

export default PortfolioWeb;
