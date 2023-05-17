import React from 'react'
import { View } from 'react-native'
import LocaleProvider from '..'
import { List, Pagination, SearchBar, WhiteSpace, WingBlank } from '../../'
import enUS from '../en_US'
import esES from '../es_ES'
import ptBR from '../pt_BR'
import ruRU from '../ru_RU'
import zhCN from '../zh_CN'

const Page = React.memo(() => (
  <View>
    <Pagination total={5} current={1} />
    <WhiteSpace />
    <List style={{ backgroundColor: 'white' }}>
      <WhiteSpace />
      <SearchBar placeholder="Search" showCancelButton />
    </List>
  </View>
))

export default class LocaleProviderExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      locale: 'English',
    }
  }

  onChange = (value: any) => {
    this.setState({
      locale: value[0],
    })
  }

  render() {
    const { locale } = this.state
    const languages: Array<any> = [
      {
        value: '中国',
        label: '中国',
        language: zhCN,
      },
      {
        value: 'English',
        label: 'English',
        language: enUS,
      },
      {
        value: 'Русский',
        label: 'Русский',
        language: ruRU,
      },
      {
        value: 'Español',
        label: 'Español',
        language: esES,
      },
      {
        value: 'Português - BR',
        label: 'Português - BR',
        language: ptBR,
      },
    ]
    const currentLocale = languages.find(
      (item) => item.value === locale,
    ).language

    return (
      <WingBlank>
        <WhiteSpace />
        <LocaleProvider locale={currentLocale}>
          <Page />
        </LocaleProvider>
      </WingBlank>
    )
  }
}
