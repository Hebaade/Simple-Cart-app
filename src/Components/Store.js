import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Data from '../Data/Data.json'
import StoreItem from './StoreItem'
export default function Store() {
  return (
    <div>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {Data.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
