# Event

## 基本事件

 - `comments-load` 评论加载事件
 - `comments-loaded` 评论加载完成事件
 - `editor-submit` 编辑器提交事件
 - `editor-submitted` 编辑器提交完成事件
 - `user-changed` 本地用户数据变更事件

## 列表操作事件

::: warning

此类事件不建议外部监听，建议仅 `trigger`

:::

 - `list-reload` 列表重载事件
 - `list-import` 列表导入事件
 - `list-insert` 评论新增事件
 - `list-delete` 评论删除事件
 - `list-update` 评论更新事件
 - `list-refresh-ui` 列表 UI 刷新事件

## 侧边栏操作事件

 - `sidebar-show` 侧边栏展开事件
 - `sidebar-hide` 侧边栏收起事件

## 编辑器操作事件

 - `editor-open` 编辑器打开事件
 - `editor-close` 编辑器关闭事件
 - `editor-show-loading` 编辑器加载显示事件
 - `editor-hide-loading` 编辑器加载隐藏事件
 - `editor-notify` 提醒显示事件
 - `editor-reply` 回复设置事件

## 其他事件

 - `unread-update` 未读提醒数据更新事件
 - `checker-admin` 管理员检查事件
 - `checker-captcha` 验证码检查事件
 - `check-admin-show-el` 仅管理员可见元素检查及更新事件
