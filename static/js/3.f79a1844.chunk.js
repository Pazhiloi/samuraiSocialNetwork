(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{295:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__UO5wj",posts:"MyPosts_posts__3clZj"}},296:function(t,e,s){t.exports={item:"Post_item__OGHaJ"}},297:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1d_md"}},298:function(t,e,s){"use strict";s.r(e);var n=s(3),c=s(32),o=s(33),i=s(35),a=s(34),r=s(0),u=s.n(r),p=s(16),j=s(93),d=s(87),l=s(124),b=s(72),f=s(30),O=s(295),h=s.n(O),x=s(296),m=s.n(x),v=s(1),g=function(t){return Object(v.jsxs)("div",{className:m.a.item,children:[Object(v.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/147/147144.png",alt:""}),t.message,Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Like"})," ",t.likesCount]})]})},P=Object(b.a)(10),k=Object(l.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(v.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(v.jsx)("div",{children:Object(v.jsx)(d.a,{name:"newPostText",component:f.b,placeholder:"Post message",validate:[b.b,P]})}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{children:"Add Post"})})]})})),S=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(v.jsx)(g,{message:t.message,likesCount:t.likesCount})}));return Object(v.jsxs)("div",{className:h.a.postsBlock,children:[Object(v.jsx)("h3",{children:"My posts"}),Object(v.jsx)(k,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(v.jsx)("div",{className:h.a.posts,children:e})]})})),_=Object(p.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(j.a)(e))}}}))(S),y=s(36),w=s(297),B=s.n(w),C=s(125),I=function(t){var e=Object(r.useState)(!1),s=Object(C.a)(e,2),n=s[0],c=s[1],o=Object(r.useState)(t.status),i=Object(C.a)(o,2),a=i[0],u=i[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(v.jsxs)("div",{children:[!n&&Object(v.jsx)("div",{children:Object(v.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"---"})}),n&&Object(v.jsx)("div",{children:Object(v.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},onBlur:function(){c(!1),t.updateStatus(a)},value:a})})]})},N=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:B.a.descriptionBlock,children:[Object(v.jsx)("img",{src:e.photos.large,alt:""}),Object(v.jsx)(I,{status:s,updateStatus:n})]})}):Object(v.jsx)(y.a,{})},T=function(t){return Object(v.jsxs)("div",{children:[Object(v.jsx)(N,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(v.jsx)(_,{})]})},U=s(8),A=s(9),M=function(t){Object(i.a)(s,t);var e=Object(a.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(v.jsx)(T,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(A.d)(Object(p.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:j.d,getStatus:j.c,updateStatus:j.e}),U.f)(M)}}]);
//# sourceMappingURL=3.f79a1844.chunk.js.map