import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { AtSearchBar} from 'taro-ui'
import { inject, observer } from '@tarojs/mobx'
import './index.scss'

type PageStateProps = {
  customerStore: {
    customer: any[];
    queryCustomer: Function;
  };
}

interface Index {
  state: {
      searchValue: string;
      answer: string;
  };

  props: PageStateProps;
}

@inject('customerStore')
@observer
class Index extends Component {

    constructor () {
        super(...arguments)
      }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  onChange (value) {
    this.setState({
        searchValue: value
    })
  }

  onActionClick (){
    console.log('commit value', this.state.searchValue)
    this.setState({answer: 'holy'})

    this.props.customerStore.queryCustomer(this.state.searchValue)
  }

  render () {
    console.log('bb', this.props)
    const {customer} = this.props.customerStore
    console.log('aaa', customer)
    return (
      <View className='root'>
          <View className='header'>
            <View className='header-left'>客户列表</View>
            <View className='header-right'>新增客户</View>
          </View>

          <AtSearchBar
            showActionButton={false}
            value={this.state.searchValue}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
        <Text>{this.state.answer}</Text>
        <Text>{customer[0].name}</Text>

      </View>
    )
  }
}

export default Index as ComponentType
