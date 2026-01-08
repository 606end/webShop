#!/bin/bash

# start.sh - 启动脚本

echo "选择启动模式:"
echo "1) 完整服务器 (代理 + Mock)"
echo "2) 纯代理服务器"
echo "3) 纯Mock服务器"
echo "4) PM2生产模式"

read -p "请输入选项 (1-4): " mode

case $mode in
  1)
    echo "🚀 启动完整服务器..."
    npm start
    ;;
  2)
    echo "🔗 启动纯代理服务器..."
    npm run proxy
    ;;
  3)
    echo "🎭 启动纯Mock服务器..."
    npm run mock
    ;;
  4)
    echo "⚡ 使用PM2启动生产模式..."
    npm run pm2:start
    ;;
  *)
    echo "❌ 无效选项"
    exit 1
    ;;
esac