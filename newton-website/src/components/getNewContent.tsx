import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import bannerGetnew from '../static/images/getnew/getnew-banner.png'
import bannerGetnewH5 from '../static/images/getnew/getnew-banner-h5.png'
import { numFormat } from '../hooks/createTime'
import { useIntl } from 'gatsby-plugin-intl'
import { getRequest } from '../hooks/axiosData'
import { getNewUrl, newsEnvUrl } from '../hooks/url'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function GetNewContent() {
  const intl = useIntl()
  const [data, setData]: any = useState([])
  const [balance, setBalance]: any = useState([])

  useEffect(() => {
    const totalUrl = getNewUrl + '/api/v1/brief'
    const balanceUrl = getNewUrl + '/api/v1/addr/NEW182E111111111111111111111111114FhDeS/'
    const fetchData = async () => {
      const res = await getRequest(totalUrl)
      setData(res.data)
    }
    fetchData()
    const balanceData = async () => {
      const res = await getRequest(balanceUrl)
      setBalance(res.data.balance)
    }
    balanceData()
  }, [])
  return (
    <div id={'getnew'}>
      <div className={'ecosystem-banner getnew-banner'}>
        <LazyLoadImage className={'ecosystem-banner-pc'} alt={'img'} effect="blur" src={bannerGetnew} />
        <LazyLoadImage className={'ecosystem-banner-h5'} alt={'img'} effect="blur" src={bannerGetnewH5} />
        <h2>
          {intl.formatMessage({ id: 'G E T' })}&nbsp;&nbsp;{intl.formatMessage({ id: 'N E W' })}
        </h2>
      </div>
      <div className={'getnew-content container'}>
        <div className={'newtax'}>
          <dl>
            <dt>
              <span>
                <i></i>
                {intl.formatMessage({ id: 'NewTax 2020' })}
              </span>
            </dt>
            <dd>
              <span>
                <i>{intl.formatMessage({ id: 'Address' })}:</i>
                <i>NEW182K9sX2KE3gw6o7WNNroW1K7FDuvhMfEtkF</i>
              </span>
              <span>
                <i>{intl.formatMessage({ id: 'Effective Time' })}:</i>
                <i>2020-01-01 17:48:57</i>
              </span>
            </dd>
          </dl>
          <dl className={'newtax-item'}>
            <dt>
              <span>
                <i></i>
                {intl.formatMessage({ id: 'NewTax 2019' })}
              </span>
            </dt>
            <dd>
              <span>
                <i>{intl.formatMessage({ id: 'Address' })}:</i>
                <i>NEW182GJfscSmL2TjVdqbcVm3uZKGgUSitCjxt4</i>
              </span>
              <span>
                <i>{intl.formatMessage({ id: 'Effective Time' })}:</i>
                <i>2019-05-24 09:32:51 ~ 2020-01-01 17:48:56</i>
              </span>
            </dd>
          </dl>
        </div>
        <div className={'newtax-content'}>
          {intl.formatMessage({ id: 'NEW earned from Newton DApp Ecosystem makes NewTax.' })}
          <br />
          {intl.formatMessage({
            id: 'NEW from NewTax will release to NewPool for Newton community economy incentives. The release time and the usage of NewTax will be announced in the future.'
          })}
        </div>
        <div className={'newtax-total'}>
          <dl className={'total-top top1'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew1.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'NEW Total Amount' })}</h3>
              <span>100 {intl.formatMessage({ id: 'Billion' })} NEW</span>
            </dd>
          </dl>
          <dl className={'total-top top2'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew2.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'Destroyed' })}</h3>
              <span>{balance !== '' ? numFormat(balance) : null} NEW</span>
            </dd>
          </dl>
          <dl className={'total-top top3'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew3.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'Circulating Supply' })}</h3>
              <span>{data.circulating_supply !== '' ? numFormat(data.circulating_supply) : null} NEW</span>
            </dd>
          </dl>
          <dl className={'total-bottom bottom1'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew4.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'Price of the Day' })}</h3>
              <span>{data.newton_price_usd !== '' ? data.newton_price_usd : null} USD</span>
            </dd>
          </dl>
          <dl className={'total-bottom bottom2'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew5.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'Stake Total Amount' })}</h3>
              <span>{data.locked_amount !== '' ? numFormat(data.locked_amount) : null} NEW</span>
            </dd>
          </dl>
          <dl className={'total-bottom bottom3'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew6.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'Released on the Day' })}</h3>
              <span>{data.incentive_release !== '' ? numFormat(data.incentive_release * 2) : null} NEW</span>
            </dd>
          </dl>
        </div>
        <div className={'exchange'}>
          <h2>{intl.formatMessage({ id: 'Listed Exchange' })}</h2>
          <div className={'top-img'}>
            <a href="https://www.huobi.com" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/listed1.png" />
            </a>
            <a href="https://www.hb.co.kr/en-us/" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/listed2.png" />
            </a>
            <a href="https://www.biup.com/" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/listed3.png" />
            </a>
            <a href="https://www.mxc.com/" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/listed4.png" />
            </a>
            <a href="https://www.binance.org/" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/listed5.png" />
            </a>
            <a href="https://www.biki.com/" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/listed6.png" />
            </a>
            <a href="https://www.hkex.me/" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/listed7.png" />
            </a>
            <a href="https://www.bibull.co/" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/listed8.png" />
            </a>
          </div>
        </div>
        <div className={'dex'}>
          <h2>{intl.formatMessage({ id: 'DEX' })}</h2>
          <a
            href="https://addons.mozilla.org/zh-CN/firefox/addon/newmask/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"
            target="_blank"
          >
            <StaticImage placeholder="blurred" alt="img" src="../static/images/ecosystem/new-swap.png" />
          </a>
        </div>
        <div className={'dex Wallet'}>
          <h2>{intl.formatMessage({ id: 'Wallet' })}</h2>
          <div>
            <a href={newsEnvUrl + '/newpay/'} target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/ecosystem/new-pay.png" />
            </a>
            <a href="https://newmall.io/" target="_blank" className={'new-mask'}>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/ecosystem/new-mask.png" />
            </a>
          </div>
          <p>
            <span>{intl.formatMessage({ id: 'Announcement' })}: </span>&lt;
            {intl.formatMessage({ id: 'NewChain NEW and Binance NEW-09E SWAP instructions' })}&gt;
          </p>
        </div>
      </div>
    </div>
  )
}