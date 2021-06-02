import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

const listOne = [
  {
    id: 'a1',
    img: ['boxin_00'],
    title: 'Box-In App',
    url: 'https://play.google.com/store/apps/details?id=com.twiscode.boxin'
  },
  {
    id: 'a2',
    img: ['dokterapps_00'],
    title: 'dokter app',
    url: 'https://play.google.com/store/apps/details?id=com.twiscode.fkunair'
  },
  {
    id: 'a3',
    img: ['fashion_forth_00'],
    title: 'Fashion Forth App',
    url:
      'https://play.google.com/store/apps/details?id=com.twiscode.fashionforth'
  },
  {
    id: 'a4',
    img: ['gpbb_00'],
    title: 'GPBB',
    url: 'https://play.google.com/store/apps/details?id=com.twiscode.gpbb'
  }
];

const listTwo = [
  {
    id: 'b1',
    img: ['omahlab_00'],
    title: 'OMAH LAB',
    url: 'https://play.google.com/store/apps/details?id=com.omahlab.android'
  },
  {
    id: 'b2',
    img: ['pass_00'],
    title: 'PASS SWAB',
    url: 'http://book.passwab.com'
  },
  {
    id: 'b3',
    img: ['stellar_00'],
    title: 'Stellar Pass',
    url:
      'https://play.google.com/store/apps/details?id=com.twiscode.stellar.dev'
  },
  {
    id: 'b4',
    img: ['xettle_00'],
    title: 'xettle app',
    url: 'https://play.google.com/store/apps/details?id=com.xettle.android'
  }
];

const PortofolioList = () => (
  <>
    <Col className="ml-auto mr-auto" md="12">
      <Row className="collections">
        <Col md="6">
          {listOne.map(data => (
            <a href="javascript::void();" className="card-parent" key={data.id}>
              <img
                alt="..."
                className="img-raised mx-2"
                src={require(`@images/port/${data.img[0]}.jpg`)}
                height="480px"
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
                className="img-raised mx-2"
                src={require(`@images/port/${data.img[0]}.jpg`)}
                height="480px"
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

export default PortofolioList;
