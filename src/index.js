import React from 'react'
//高阶函数
const lazyLoadComponent = fn => (
    class AsyncComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                Component: null
            }
        }
        componentWillMount() {
            fn()
            .then(module => module.default)
            .then(Component => {
                if (!Component) throw Error('React 组件必须有一个default的导出。')
                this.setState(() => ({Component}))
            })
        }
        render() {
            const { Component } = this.state
            return !!Component ? <Component {...this.props} /> : null
        }
    }
)
export default lazyLoadComponent