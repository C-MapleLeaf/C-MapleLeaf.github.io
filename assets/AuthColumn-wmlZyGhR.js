import{_ as m}from"./BasicTable.vue_vue_type_script_setup_true_lang-BWWkEfeA.js";import"./TableImg.vue_vue_type_style_index_0_lang-N0YYDiU4.js";import{_ as p}from"./index-QYDpXPJT.js";import{u}from"./useTable-Bb1P8lM3.js";import{d as c}from"./table-BsJEXMCI.js";import{d as h,Z as n,_ as f,k as b,a9 as _,a8 as w,u as o,ab as x}from"./vue-BjERyvPm.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-ESmsYoaP.js";import"./FormItem.vue_vue_type_script_lang-BVmTMJAo.js";import"./componentMap-DoBukqgg.js";import"./useFormItem-B4KjxddK.js";import"./antd-BmrhB3rb.js";import"./entry/index-7B4pLcF8.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CXaZoFWm.js";import"./index-9YF_hATG.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-DApJo9D1.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-CdSwm4U4.js";import"./index-Burp8T3f.js";import"./index-CXCscOUQ.js";import"./useWindowSizeFn-DXCLMnp0.js";import"./base64Conver-bBv-IO2K.js";import"./helper-CojS7jHt.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CgJLswy1.js";import"./useForm-8OSsQF3s.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./useSortable-C73o2q0A.js";import"./download-DfdyOk9Q.js";const I={class:"p-4"},Y=h({__name:"AuthColumn",setup(C){const a=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",minWidth:200,auth:"test"},{title:"状态",dataIndex:"status",width:100},{title:"状态1",dataIndex:"status1",width:100},{title:"状态2",dataIndex:"status2",width:100},{title:"状态3",dataIndex:"status3",width:100},{title:"状态4",dataIndex:"status4",width:100},{title:"状态5",dataIndex:"status5",width:100},{title:"地址",dataIndex:"address",auth:"super",ifShow:e=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],[r]=u({title:"TableAction组件及固定列示例",api:c,columns:a,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"},showSelectionBar:!0});function l(e){}function d(e){}function i(e){}return(e,k)=>(n(),f("div",I,[b(o(m),{onRegister:o(r)},{bodyCell:_(({column:s,record:t})=>[s.key==="action"?(n(),w(o(p),{key:0,actions:[{label:"编辑",onClick:l.bind(null,t),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:d.bind(null,t),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:i.bind(null,t)},ifShow:A=>t.status!=="enable"},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:i.bind(null,t)},ifShow:()=>t.status==="enable"},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:i.bind(null,t)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):x("",!0)]),_:1},8,["onRegister"])]))}});export{Y as default};