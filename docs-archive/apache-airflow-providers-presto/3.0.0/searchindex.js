Search.setIndex({docnames:["_api/airflow/providers/presto/hooks/index","_api/airflow/providers/presto/hooks/presto/index","_api/airflow/providers/presto/index","_api/airflow/providers/presto/transfers/gcs_to_presto/index","_api/airflow/providers/presto/transfers/index","_api/airflow/providers/presto/transfers/presto_to_slack/index","_api/tests/system/providers/presto/example_gcs_to_presto/index","_api/tests/system/providers/presto/example_presto_to_slack/index","_api/tests/system/providers/presto/index","commits","index","installing-providers-from-sources","operators/transfer/gcs_to_presto","operators/transfer/presto_to_slack"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["_api/airflow/providers/presto/hooks/index.rst","_api/airflow/providers/presto/hooks/presto/index.rst","_api/airflow/providers/presto/index.rst","_api/airflow/providers/presto/transfers/gcs_to_presto/index.rst","_api/airflow/providers/presto/transfers/index.rst","_api/airflow/providers/presto/transfers/presto_to_slack/index.rst","_api/tests/system/providers/presto/example_gcs_to_presto/index.rst","_api/tests/system/providers/presto/example_presto_to_slack/index.rst","_api/tests/system/providers/presto/index.rst","commits.rst","index.rst","installing-providers-from-sources.rst","operators/transfer/gcs_to_presto.rst","operators/transfer/presto_to_slack.rst"],objects:{"airflow.providers":[[2,0,0,"-","presto"]],"airflow.providers.presto":[[0,0,0,"-","hooks"],[4,0,0,"-","transfers"]],"airflow.providers.presto.hooks":[[1,0,0,"-","presto"]],"airflow.providers.presto.hooks.presto":[[1,1,1,"","DEFAULT_FORMAT_PREFIX"],[1,2,1,"","PrestoException"],[1,3,1,"","PrestoHook"],[1,6,1,"","generate_presto_client_info"]],"airflow.providers.presto.hooks.presto.PrestoHook":[[1,4,1,"","conn_name_attr"],[1,4,1,"","conn_type"],[1,4,1,"","default_conn_name"],[1,5,1,"","get_conn"],[1,5,1,"","get_isolation_level"],[1,4,1,"","hook_name"],[1,5,1,"","insert_rows"]],"airflow.providers.presto.transfers":[[3,0,0,"-","gcs_to_presto"],[5,0,0,"-","presto_to_slack"]],"airflow.providers.presto.transfers.gcs_to_presto":[[3,3,1,"","GCSToPrestoOperator"]],"airflow.providers.presto.transfers.gcs_to_presto.GCSToPrestoOperator":[[3,5,1,"","execute"],[3,4,1,"","template_fields"]],"airflow.providers.presto.transfers.presto_to_slack":[[5,3,1,"","PrestoToSlackOperator"]],"airflow.providers.presto.transfers.presto_to_slack.PrestoToSlackOperator":[[5,5,1,"","execute"],[5,5,1,"","render_template_fields"],[5,4,1,"","template_ext"],[5,4,1,"","template_fields"],[5,4,1,"","template_fields_renderers"],[5,4,1,"","times_rendered"]],"tests.system.providers":[[8,0,0,"-","presto"]],"tests.system.providers.presto":[[6,0,0,"-","example_gcs_to_presto"],[7,0,0,"-","example_presto_to_slack"]],"tests.system.providers.presto.example_gcs_to_presto":[[6,1,1,"","BUCKET"],[6,1,1,"","DAG_ID"],[6,1,1,"","ENV_ID"],[6,1,1,"","PATH_TO_FILE"],[6,1,1,"","PRESTO_TABLE"],[6,1,1,"","gcs_csv_to_presto_table"],[6,1,1,"","test_run"]],"tests.system.providers.presto.example_presto_to_slack":[[7,1,1,"","DAG_ID"],[7,1,1,"","ENV_ID"],[7,1,1,"","PRESTO_TABLE"],[7,1,1,"","test_run"]]},objnames:{"0":["py","module","Python module"],"1":["py","data","Python data"],"2":["py","exception","Python exception"],"3":["py","class","Python class"],"4":["py","attribute","Python attribute"],"5":["py","method","Python method"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:data","2":"py:exception","3":"py:class","4":"py:attribute","5":"py:method","6":"py:function"},terms:{"0":[0,1,2,3,4,5,6,7,8,11,12,13],"00642a46d0":9,"0080354502":9,"01":9,"02":9,"027b707d21":9,"029c84e552":9,"03":9,"04":9,"05":9,"059eda05f8":9,"05b4409945":9,"06":9,"07":9,"08":9,"09":9,"0a0e1af800":9,"0a68588479":9,"0b0e4f7a4c":9,"0b2":9,"0beta1":9,"1":[1,3],"10":[9,10],"10343ec29f":9,"10483":9,"10488":9,"10528":9,"10543":9,"11":[9,11],"1100cea1fb":9,"11229":9,"11238":9,"11242":9,"11249":9,"11487":9,"11688":9,"11826":9,"11855":9,"12":[9,11],"12082":9,"12206":9,"12212":9,"12304":9,"12366":9,"12390":9,"12444":9,"12449":9,"12466":9,"12558":9,"12917":9,"12939":9,"12955":9,"12af6a0800":9,"12c5e5d8a":9,"13":9,"13148":9,"13380":9,"13717":9,"13767":9,"14":9,"14013":9,"14082":[9,10],"14487":9,"14886":9,"15":9,"1543923c19":9,"15518":9,"15576":9,"15667":10,"16":9,"16294":9,"16405":9,"16464":9,"16501":9,"16682":9,"16adc035b1":9,"16e7129719":9,"17":[9,10],"17015":9,"17116":9,"17682":9,"17890":9,"18":9,"19":9,"1fba5402bb":9,"2":[0,1,2,3,4,5,6,7,8,11,12,13],"20":9,"2020":9,"2021":[9,11],"2022":[9,10],"20244":[9,10],"2037303eef":9,"20523":9,"20614":[9,10],"20951":9,"21":9,"21084":[9,10],"21257":9,"21439":[9,10],"21630":[9,10],"21855":[9,10],"22":9,"22056":9,"22226":9,"2226e64a22":9,"22382":10,"22383":9,"22416":[9,10],"22459":9,"22819":9,"23":9,"23061":[9,10],"23104":9,"23631":9,"23979":[9,10],"23rc1":9,"24":9,"24145":9,"24229":9,"24231":9,"24292":9,"25":9,"26":9,"27":9,"28":9,"2807193594":9,"29":9,"295d66f914":9,"2a1":9,"3":[0,1,2,3,4,5,6,7,8,11,12,13],"30":9,"31":9,"32971a1a2d":9,"340698":1,"349b0811c3":9,"35834c3809":9,"3696c34c28":9,"375d1ca229":9,"3fd5ef3555":9,"4":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"406f":11,"40a2476a5d":9,"49":11,"4bde99f132":9,"4d3a":11,"4e8f9cc8d0":9,"512":11,"5164cdbe98":9,"5220e4c384":9,"54":11,"5421":9,"56ab82ed7a":9,"589d6dec92":9,"59eb5de78c":9,"5a439e84eb":9,"5c6e":11,"5c74c3a5c1":9,"6":9,"602abe8394":9,"64423563bc":9,"6610":9,"6674":11,"6714":9,"6889a333cf":9,"68e4c4dcb0":9,"6c3a67d4fc":9,"6cf76d7ac0":9,"717a7588bc":9,"720912f67b":9,"7231":9,"7338":9,"75c60923e0":9,"76ed2a49c6":9,"7718":9,"7802":9,"7825e8f590":9,"7884":9,"8":[9,10],"807ad32ce5":9,"85a18e13d9":9,"866a601b76":9,"872b1566a1":9,"87f408b1e7":9,"8807":9,"8886":9,"8891":9,"8898":9,"88bdcfa0df":9,"8994":9,"8b6b0848a3":9,"8ec4":11,"8f8db8959e":9,"9026":9,"92585ca4cb":9,"9320":9,"9370":9,"9404":9,"9408":9,"9550":9,"9730":9,"97496ba2b4":9,"97a429f9d0":9,"9b39f24780":9,"9c05a95117":9,"9c94b72d44":9,"class":[9,10],"default":5,"do":11,"final":9,"import":[9,10,11],"int":1,"new":9,"return":[1,5],"short":3,A:[1,12],AS:1,By:11,For:[3,5,9,10,11],If:[3,5,10,11],It:11,The:[1,3,5,10,11],There:11,To:[11,12],_get_pretty_exception_messag:9,aab11890db:9,about:[9,11],abov:11,ac2f72c98d:9,access:5,access_token:3,account:3,across:12,ad:[5,9,10],add:[9,10],ae7cb4a1e2:9,aeabe994b3:9,after:[9,10],against:[5,12],aip:9,airflow:11,aka:11,all:[1,5,10,12],allow:[5,12],alreadi:[3,11],also:11,an:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],analyt:12,ani:[3,11],apach:11,apache_airflow_providers_presto:11,api:10,appli:[5,10],applic:12,apply_default:10,april:9,ar:[5,10,11],arg:1,asc:[10,11],ascii:[5,13],assum:12,assumpt:3,attribut:5,august:9,auth:9,authent:5,author:3,auto:[9,10],autoapi:9,autom:9,automat:10,avail:[10,11],b2a28d1590:9,b40dffa085:9,b916b75079:9,ba4b:11,backport:9,base:[1,3,5],baseoper:[3,5],bash:11,batch:9,bbc627a3da:9,be75dcd39c:9,belong:11,below:[10,11],bin:11,binari:11,black:9,blob:10,bool:1,brees:9,broken:9,bst:11,bucket:[3,6,12],bugfix:9,buggfix:9,build:[9,11],c34ef853c8:9,c3e24c9d05:9,c7e5bce57f:9,ca4238eb4d:9,call:5,can:[3,5,10,11,12,13],candid:9,cassandra:12,cbf8001d76:9,cde15c6e4d3a8ec4ecf4ba4b6674e08ad7de406f:11,cde1:11,certif:11,certifi:11,chain:3,chang:[5,9],changelog:9,channel:[5,13],chapter:11,check:[9,11],checksum:[10,11],choos:11,classifi:[9,10],cleanup:9,client:[9,10],cloud:3,code:11,col:13,column:[1,3,12],com:[10,11],combin:12,come:9,command:9,comment:9,commit:9,commit_everi:1,compat:[9,10],complet:10,conn_name_attr:1,conn_typ:1,connect:[1,3,5,9,10],contain:[3,5,11,13],context:[3,5],contributor:9,correct:[9,10,11],correspond:12,count:1,creat:[3,5,11],creator:3,credenti:3,cross:9,csv:3,ctx:1,curl:11,custom:13,d0e7db4024:9,d200:9,d7dbfb7e26:9,d7de:11,d94fa37830:9,d:11,dag:[6,7,9,10],dag_id:[1,6,7],data:[3,5,9,12],databas:12,datafram:[5,13],dataset:13,db:10,dbapi:1,dbapihook:[1,9],decemb:9,decor:10,default_conn_nam:1,default_format_prefix:1,delai:[9,10],deleg:3,delegate_to:3,dep:11,depend:9,deriv:[3,5],describ:11,descript:9,design:9,dest:11,destin:[3,5],detail:[9,10,11],dev0:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],dev:9,dict:5,dictionari:[3,5],diff:11,differ:[5,11],directli:3,directori:11,discoveri:9,distribut:[11,12],doc:[9,10],document:[9,10],doe:12,domain:3,doubl:9,down:11,download:11,drop:11,ds:13,due:10,dynam:9,e08a:11,e:13,ecf4:11,echo:11,ee7ca128a1:9,enabl:[3,9],engin:12,entir:12,env_id:[6,7],environ:5,error:[9,10],essenti:11,even:12,exampl:[5,6,7,9,10,11,13],example_gcs_to_presto:[8,12],example_presto_to_slack:[8,13],except:1,execut:[3,5,13],execution_d:1,exist:[10,12],experiment:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],explain:10,explan:9,explanatori:9,extra:[5,10],f3521fb0e3:9,f5b96315fe:9,f6bd817a3a:9,f77417eb0d:9,f:13,fals:1,fdd9b6f65b:9,featur:[0,1,2,3,4,5,6,7,8,9,11,12,13],feb:9,field:[5,9],file:[3,9,10,11,12],fill:1,filter:5,fingerprint:11,first:[3,10],fix:9,folder:11,follow:[11,13],form:9,format:13,formmatt:9,foundat:11,framework:10,fresh:9,from:[1,3,5,9,10,13],g:13,gc:[3,9,10],gcp_conn_id:3,gcs_csv_to_presto_t:[6,12],gcs_to_presto:[2,4],gcstoprestooper:[3,6,9,10,12],gener:[1,9],generate_presto_client_info:1,get:[3,11],get_conn:1,get_isolation_level:1,get_pandas_df:9,get_record:1,get_template_context:[3,5],gigabyt:12,github:10,gmail:11,good:11,googl:[3,10],google_cloud_default:3,gpg:11,grammar:9,grant:3,guid:[5,11],gz:11,ha:12,hash:9,have:[3,10,12],header:[3,5,12],high:9,hive:12,hook:[2,9,10],hook_nam:1,how:[5,11],hql:[9,10],http:[10,11],i:11,iam:3,id:[3,5,11],ident:3,imag:9,imperson:3,impersonation_chain:3,implement:9,improv:9,includ:[3,9,12],indic:11,individu:9,info:[9,10],inform:[5,9],initi:10,insert:1,insert_row:1,instal:9,install_requir:10,instead:1,instruct:11,integr:9,interact:[1,3,9,12],introduc:9,irrevers:5,isol:1,issuer:11,iter:[1,5],j2:5,januari:[9,10],jinja:[3,5],jinja_env:5,json:[1,3,5,12],juli:9,june:9,k8:[9,10],ka:11,kaxil:11,kaxilnaik:11,kei:[5,11],kerbero:9,know:11,kwarg:[1,3,5,9],l:11,la:11,larg:12,last:3,latest:9,lazili:9,least:10,left:11,level:[1,9],librari:5,line:9,link:[9,11],list:[3,5,9,10,12],live:12,load:3,local:11,logo:9,look:5,ls:11,made:11,magic:9,mai:9,main:[3,5,10,11],make:[3,9,10],manag:[9,11],manual:10,map:5,march:9,markdown:9,match:[9,11],maximum:1,md:10,messag:[5,13],meta:9,method:[3,5],mid:9,might:10,migrat:[9,10],min:9,minimum:10,mirror:11,miss:9,mistakenli:10,mktemp:11,model:[3,5],modul:9,month:9,more:[3,5,9],most:11,move:9,multipl:[9,12],must:3,mutat:5,my_channel:13,mypi:[9,10],naik:11,name:[1,5,9],need:[5,10],next:9,nice:5,none:[1,3,5,11],note:9,now:9,num:1,number:[1,9],o:11,object:1,octob:9,offici:11,onc:11,one:[1,11],onli:10,open:12,oper:[3,5,9],optimis:10,option:[1,3,5,12],order:10,org:11,organ:12,origin:[3,11],otherwis:10,our:9,out:9,overrid:5,owner:11,package_nam:11,package_vers:11,page:[9,11],panda:[5,10],paramet:[1,3,5],pass:[5,9,10],path:[3,12],path_to_fil:[6,12],per:9,petabyt:12,pgp:11,pgpk:11,pgpv:11,ph:1,pip:[9,10,11],place:5,pleas:11,point:9,polici:10,post:13,pre:12,preced:3,predefin:13,prepar:9,presto:[11,13],presto_conn_id:[1,3,5],presto_default:[1,3,5],presto_t:[3,6,7,12,13],presto_to_slack:[2,4,13],prestodb:1,prestoexcept:1,prestohook:[1,9,10],prestotoslackoper:[5,7,9,10],prestotransferoper:10,pretti:5,previou:11,primari:11,problem:9,project:9,proprietari:12,provid:[11,12,13],provider_download_dir:11,publish:13,pull:9,py3:11,py:[12,13],pydocstyl:9,pylint:9,pypi:[9,10],python:[9,10,11],queri:[5,12,13],quick:[9,10],rang:12,rc2:9,rc3:9,rc:[9,10],readm:[9,10],recommend:11,ref:9,refer:[3,5,9],refernc:9,regener:9,relas:9,relat:12,releas:[9,10],relev:11,rema:9,remain:9,remov:[9,10,11],renam:9,render:[3,5],render_template_field:5,replac:[1,9,10],repositori:10,request:3,requir:3,requisit:3,result:[5,13],results_df:[5,13],results_df_nam:5,role:3,row:1,rsa:11,run:[10,11,12],s:[5,9,10,11],same:[3,5,12],sat:11,schema:[1,12],schema_field:3,schema_object:3,script:[9,11],sdist:[10,11],see:[9,10],select:[1,11,13],self:[1,3,5,11],send:5,sep:11,separ:[3,9],sequenc:[3,5],server:11,servic:[3,12],set:[1,3,5],setup:9,sha512:[10,11],sha:11,shasum:11,should:[3,11],sign:11,signatur:[10,11],singl:[5,12],site:10,size:12,slack:[5,10,13],slack_channel:[5,13],slack_conn_id:5,slack_default:5,slack_messag:[5,13],slack_token:5,snowflak:9,softwar:[9,11],sourc:[1,3,5,6,7,10,12,13],source_bucket:[3,12],source_object:[3,12],specif:9,specifi:[5,10],sphinx:9,sql:[1,5,9,10,12,13],ssl:9,statement:5,static_babynam:1,step:11,storag:3,store:12,str:[1,3,5],strict:9,string:[1,3,12],subject:9,sum:11,support:[9,10],synchron:9,system:[12,13],tabl:[1,3,5],tablefmt:5,tabul:5,take:5,tar:11,target:1,target_field:1,task_id:[1,12,13],templat:[3,5],template_ext:5,template_field:[3,5],template_fields_render:5,temporari:11,term:3,test:[12,13],test_run:[6,7],them:10,thi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],those:[10,11],through:1,times_rend:5,toc:9,token:[3,5],tool:[9,10],toolchain:9,top:[10,11],transact:1,transfer:[2,9],trino:[9,10],trinohook:[9,10],trove:10,trust:11,try_numb:1,tupl:[1,12],type:[9,10],typehint:9,typo:9,union:[3,5],unknown:11,up:9,updat:[9,10],upgrad:[9,10],upload:3,us:[3,5,6,7,9,10,11,12],usag:13,user:11,utf:9,valid:11,valu:5,variabl:5,variou:12,verifi:[9,10],version:[9,10,11],via:[10,11],wai:1,want:[10,11],warn:[9,11],wave:9,webhook_token:5,well:11,wheel:10,when:[3,5,9,10],where:12,whether:1,which:3,whl:11,why:11,wide:3,word:9,work:3,worri:11,wrong:9,wrongli:9,x:[9,10],you:[5,10,11,12],your:[10,12]},titles:["<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.presto.hooks</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.presto.hooks.presto</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.presto</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.presto.transfers.gcs_to_presto</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.presto.transfers</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.presto.transfers.presto_to_slack</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">tests.system.providers.presto.example_gcs_to_presto</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">tests.system.providers.presto.example_presto_to_slack</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">tests.system.providers.presto</span></code>","Package apache-airflow-providers-presto","<code class=\"docutils literal notranslate\"><span class=\"pre\">apache-airflow-providers-presto</span></code>","Installing from sources","Google Cloud Storage to Presto Transfer Operator","PrestoToSlackOperator"],titleterms:{"0":[9,10],"1":[9,10],"2":[9,10],"3":[9,10],"break":10,"class":[1,3,5],"function":1,airflow:[0,1,2,3,4,5,9,10],apach:[9,10],attribut:1,bug:10,chang:10,changelog:10,cloud:12,commit:10,content:[1,3,5,6,7,10],cross:10,csv:12,depend:10,download:10,example_gcs_to_presto:6,example_presto_to_slack:7,featur:10,fix:10,from:[11,12],gc:12,gcs_to_presto:3,googl:12,guid:10,hook:[0,1],instal:[10,11],integr:11,load:12,misc:10,modul:[1,3,5,6,7],offici:10,oper:[12,13],packag:[9,10,11],prerequisit:12,presto:[0,1,2,3,4,5,6,7,8,9,10,12],presto_to_slack:5,prestotoslackoper:13,provid:[0,1,2,3,4,5,6,7,8,9,10],pypi:11,refer:10,releas:11,requir:10,resourc:10,sourc:11,storag:12,submodul:[0,4,8],subpackag:2,system:[6,7,8],tabl:12,task:12,test:[6,7,8],transfer:[3,4,5,12],us:13,verifi:11}})