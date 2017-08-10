/*
 *  =================================================  *
 *  名称：animateControl 动画播放控制器
 *  作用：按照预先设定好的动画顺序自动播放动画
 *  注意：在swiper幻灯片中嵌入子幻灯片时，在loop循环模式下，不能在父幻灯片的第1张幻灯片和最后一张幻灯片中嵌入子幻灯片（因为swiper插件原生不支持）
 *  版本：version 1.0.3
 *  日期：2015年11月29日
 *  作者：Miracle Wei ( 1344700043@qq.com )
 *  =================================================  *
 *  类的示例：
	var myAC = new animateControl("ani_");	// 创建对象的时候，可以指定动画元素名称的前缀字符，省略时默认为【ani_】
	myAC.init(
		{
			slide_1 : {						// 第 1 张幻灯片的索引名称（默认以【slide_】开头，可以随意设置，在同一个animateControl中不允许重名）
				animate_1 : {				// 第 1 个动画对象的索引名称（默认以【animate_】开头，可以随意设置，在同一张幻灯片中不允许重名）
					element : 'ani_01',		// 动画元素的名称：必须以创建animateControl时的前缀字符开始，并与HTML元素的类名对应
					animation : 'fadeIn', 	// 动画特效的名称：默认值为fadeIn（淡入动画），可设置为animate.css中的动画特效名称
					start : 0,				// 动画的播放顺序：默认值为0表示同步播放，1表示依次播放
					type : 0,				// 动画的播放类型：默认值为0表示进入动画，1表示表演动画，2表示退出动画
					duration : '1s', 		// 动画的持续时间：默认值为1s（单位秒s或毫秒ms）
					delay : '0s', 			// 动画的延迟时间：默认值为0s（单位秒s或毫秒ms）
					count : 1, 				// 动画的播放次数：默认值为1次（如果设为infinite关键字，则表示无限次数）
					timing : 'ease', 		// 动画的调速曲线：默认值为ease：动画以低速开始，然后加快，在结束前变慢。linear：动画从头到尾的速度是相同的。ease-in：动画以低速开始。ease-out：动画以低速结束。ease-in-out：动画以低速开始和结束。cubic-bezier(n,n,n,n)：在 cubic-bezier 函数中使用自定义的值，可能的值是从 0 到 1 的数值。
					direction : 'normal', 	// 动画的循环方向：默认值为normal：每次循环均从第1帧开始播放到最后1帧，alternate：从第1帧开始播放到最后1帧，再从最后1帧播放到第1帧，然后再从第1帧播放到最后1帧，如此反复播放
					status : 'running', 	// 动画的运行状态：默认值为running：运行，paused：暂停
					finish : 'none',		// 动画的结束状态：默认值为none：默认，forwards：动画结束之后显示最后一帧，backwards：动画结束之后显示第一帧，both：动画开始前显示第一帧，动画结束后显示最后一帧
				},
			},
			slide_2 : {						// 第 2 张幻灯片的索引名称，如果参数【swiper】不存在时，则只需设置第 1 张幻灯片（表示对整个网页中的动画元素进行控制）
				animate_1 : {
					element : 'ani_02',
					animation : 'fadeIn',
					start : 0,
					type : 0,
					duration : '3s',
					delay : '0s',
					count : 1,
					timing : 'ease',
					direction : 'normal',
					status : 'running',
					finish : 'none',
				},
				animate_2 : {
					element : 'ani_02',
					animation : 'fadeIn',
					start : 0,
					type : 0,
					duration : '3s',
					delay : '0s',
					count : 1,
					timing : 'ease',
					direction : 'normal',
					status : 'running',
					finish : 'none',
				},
			},
		}, swiper							// 参数【swiper】：控制swiper幻灯片动画时需要提供本参数，省略时只需设置第 1 张幻灯片（表示对整个网页中的动画元素进行控制）
	);
	myAC.play();
 */

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 33=n(r){5 3=29;3.A={};3.r="3d";4(3b X[0]=="3c"&&X[0]!=""){3.r=r}3.q=K;3.d=K;3.F=K;3.E={};3.2r=J;3.1y=-1;3.S=-1;3.1t=-1;3.2s=1;3.O={x:"35",2c:0,1w:0,1g:"1s",1i:"39",1j:1,25:"36",21:"37",2T:"38",2S:"3a"};n 1v(g){4(b.y.u.v(g)==="[B 2e]"){f"2e"}4(b.y.u.v(g)==="[B 2h]"){f"2h"}4(b.y.u.v(g)==="[B 1A]"&&!2F(g)){f"1A"}4(b.y.u.v(g)==="[B 26]"){f"26"}4(b.y.u.v(g)==="[B 28]"){f"28"}4(b.y.u.v(g)==="[B 2b]"){f"2b"}4(b.y.u.v(g).1O("2a")>0){f"2a"}4(b.y.u.v(g)==="[B 2k]"){f"2k"}4(b.y.u.v(g)==="[B b]"){f"b"}}n 7(g){4(b.y.u.v(g)==="[B 2e]"){f J}4(b.y.u.v(g)==="[B 2h]"){f J}4(b.y.u.v(g)==="[B 1A]"&&!2F(g)){f J}4(b.y.u.v(g)==="[B 26]"&&g!=""){f J}4(b.y.u.v(g)==="[B 28]"&&g.e>0){f J}4(b.y.u.v(g)==="[B 2b]"&&g.e>0){f J}4(b.y.u.v(g).1O("2a")>0){f J}4(b.y.u.v(g)==="[B 2k]"&&g.Y!=""){f J}4(b.y.u.v(g)==="[B b]"){l(5 24 2B g){4(g.34(24)){f J}}}f P}3.32=n(q,d){4(!7(X[0])&&1v(X[0])=="b"){3.q=X[0]}4(!7(X[1])&&1v(X[1])=="b"){3.d=X[1];3.1y=3.d.U}4(7(3.q)){f}3.2V();3.2M();3.2O();3.2r=P};3.1k=n(c){5 1r=K;4(!7(3.d)){4(3.d.2l.2p){4(c==0){1r=3.d.m.e-2}4(c==3.d.m.e-2){1r=0}4(c==1){1r=3.d.m.e-1}4(c==3.d.m.e-1){1r=1}}}f 1r};3.2V=n(){5 W={};5 C=b.D(3.q);5 t=0;l(t=0;t<C.e;t++){5 M={};5 T={};5 R=0;5 20=P;5 Z="";5 1I=0;5 1G=b.D(3.q[C[t]]);5 1b=0;l(1b=0;1b<1G.e;1b++){5 a=3.q[C[t]][1G[1b]];5 6=a.1x;4(7($("."+6)[0])){1T}4(20){T={};M["15"+R]={};20=J}4(7(M["15"+R][6])){T[6]=0;M["15"+R][6]=a}L{T[6]=T[6]+1;5 G=1l.3h("3A");G.k.N="3v:3r;";4(T[6]==1){4(3.2s==1){5 2x=-(1l.2G.3t/2-$("."+6)[0].2z);5 2C=3u($("."+6)[0].2A/1l.2G.3w*3z);G.k.N+="2w-1J:"+2x+"1P;";G.k.N+="1J:3y%;";G.k.N+="1U:"+2C+"%;"}L{G.k.N+="1J:"+$("."+6)[0].2z+"1P;";G.k.N+="1U:"+$("."+6)[0].2A+"1P;"}}L{G.k.N+="1J:2E;";G.k.N+="1U:2E;"}G.k.N+="3x:"+$("."+6)[0].3s+"1P;";G.k.N+="3p:"+$("."+6)[0].3i+"1P;";5 1H=0;l(1H=0;1H<$("."+6).e;1H++){G.1F=6+"2W"+T[6];5 14=$("."+6)[1H];14.3e.3q(G.3g(P),14);5 2t=14.3f;4(T[6]==1){14.k.1J=0;14.k.1U=0;14.k.2w=0}2t.3j(14)}G=K;a.1x=6+"2W"+T[6];M["15"+R][a.1x]=a}5 1M=3.O.1j;5 2f=3.O.1g;5 2d=3.O.1i;4(!7(a.1j)){1M=a.1j}4(!7(a.1g)){2f=a.1g}4(!7(a.1i)){2d=a.1i}5 2H=!7(1L(1M))?1L(1M):0;5 2g=(1L(2d)+1L(2f))*2H;4(1I<2g){1I=2g;Z=a.1x}5 2Z=7(1L(1M))?P:J;4(!7(1G[1b+1])){5 1X=3.q[C[t]][1G[1b+1]]["2c"];4(7(1X)){1X=3.O.2c}4(1X==1&&!2Z){4(!7(Z)){M["15"+R][Z]["1u"]=P;Z="";1I=0}R=R+1;20=P}}L{4(!7(Z)){M["15"+R][Z]["1u"]=P;Z="";1I=0}}}4(!7(3.d)){4(3.d.2l.2p){W["8"+1S(t+1)]=M;1T}}W["8"+t]=M;M=K}3.q={};5 m=1;4(!7(3.d)){m=3.d.m.e}5 t=0;l(t=0;t<m;t++){4(!7(W["8"+t])){3.q["8"+t]=W["8"+t]}L{3.q["8"+t]={};5 I=3.1k(t);4(!7(I)){4(!7(W["8"+I])){3.q["8"+t]=W["8"+I]}}}}W=K};3.1c=n(1F){4(1F.1O(" ")>=0){5 1W=1F.3k(" ");5 z=0;l(z=0;z<1W.e;z++){4(1W[z].1O(3.r)>=0){f 1W[z]}}}L{f 1F}};3.2M=n(){5 m=1;4(!7(3.d)){m=3.d.m.e}5 11=0;l(11=0;11<m;11++){5 2q=1l;4(!7(3.d)){2q=3.d.m[11]}5 p=2q.16("[o^=\'"+3.r+"\'],[o*=\' "+3.r+"\']");3.E["8"+11]={};5 1a=0;l(1a=0;1a<p.e;1a++){5 6=3.1c(p[1a].V["o"].Y);3.E["8"+11][6]="";4(!7(p[1a].V.k)){3.E["8"+11][6]=p[1a].V.k.Y}}}5 C=b.D(3.q);5 19={};5 h=0;l(h=0;h<C.e;h++){4(7(3.E["8"+h])){1T}5 1m=b.D(3.q[C[h]]);19["8"+h]={};5 1o=0;l(1o=0;1o<1m.e;1o++){5 1n=b.D(3.q[C[h]][1m[1o]]);5 1E=0;l(1E=0;1E<1n.e;1E++){5 1Z=3.q[C[h]][1m[1o]][1n[1E]];5 6=1Z.1x;5 Q=3.O.1w;4(!7(1Z.1w)){Q=1Z.1w}4(3.E["8"+h][6]==K){1T}4(7(19["8"+h][6])){4(Q==0){19["8"+h][6]="1Y:0;"}4(Q==1){19["8"+h][6]=""}4(Q==2){19["8"+h][6]=""}5 1R=3.E["8"+h][6];1R=1R.2L(/1Y\\s*:\\s*[0-9,\\.]*\\s*;/i,"");3.E["8"+h][6]=1R+19["8"+h][6]}}}}};3.2O=n(){4(7(3.d)){5 p=1l.16("[o^=\'"+3.r+"\'],[o*=\' "+3.r+"\']");5 H=0;l(H=0;H<p.e;H++){$(p[H]).1V("k");5 6=3.1c(p[H].V["o"].Y);4(!7(3.E.2P[6])){$(p[H]).2n("k",3.E.2P[6])}}}L{5 H=0;l(H=0;H<3.d.m.e;H++){5 p=3.d.m[H].16("[o^=\'"+3.r+"\'],[o*=\' "+3.r+"\']");5 17=0;l(17=0;17<p.e;17++){$(p[17]).1V("k");5 6=3.1c(p[17].V["o"].Y);4(!7(3.E["8"+H][6])){$(p[17]).2n("k",3.E["8"+H][6])}}}}};3.3l=n(c,1z){4(1v(c)=="1A"&&c>0){4(!7(1z)&&1v(1z)=="b"){4(3.d.2l.2p){4(c<=3.d.m.e-2){5 I=3.1k(c);4(7(3.A["8"+c])){3.A["8"+c]={};4(!7(I)){3.A["8"+I]={}}}5 1Q=b.D(3.A["8"+c]).e;3.A["8"+c]["27"+1Q]=1z;4(!7(I)){3.A["8"+I]["27"+1Q]=1z}}}L{4(c<=3.d.m.e){4(7(3.A["8"+c])){3.A["8"+1S(c-1)]={}}5 1Q=b.D(3.A["8"+1S(c-1)]).e;3.A["8"+1S(c-1)]["27"+1Q]=1z}}}}};3.22=n(){4(!3.2r){f}4(!7(3.d)){4(!7(3.A["8"+3.d.U])){5 1q=b.D(3.A["8"+3.d.U]);5 1C=0;l(1C=0;1C<1q.e;1C++){5 10=3.A["8"+3.d.U][1q[1C]];10.22()}}4(3.1y!=3.d.U){3.1D(3.1y);3.1D(3.1k(3.1y));3.1y=3.d.U}3.2j(3.d.U)}L{3.2j(0)}};3.1D=n(c){4(7(c)){f}5 p=3.d.m[c].16("[o^=\'"+3.r+"\'],[o*=\' "+3.r+"\']");5 1e=0;l(1e=0;1e<p.e;1e++){$(p[1e]).1V("k");5 6=3.1c(p[1e].V["o"].Y);4(!7(3.E["8"+c][6])){p[1e].2u("k",3.E["8"+c][6])}}4(!7(3.A["8"+c])){5 1q=b.D(3.A["8"+c]);5 1B=0;l(1B=0;1B<1q.e;1B++){5 10=3.A["8"+c][1q[1B]];10.1D(10.d.U);10.1D(10.1k(10.d.U))}}};3.2j=n(c){4(1v(c)!="1A"||c<0){4(!7(3.d)){4(c>3.d.m.e-1){f K}}}3.S=c;4(7(3.q["8"+3.S])){f}3.1t=0;3.F=K;3.F=3.2I(3.S);4(7(3.F)){f}3.2m()};3.2I=n(c){5 1d={};5 F;5 1p;5 I=3.1k(c);4(!7(3.d)){F=3.d.m[c].16("[o^=\'"+3.r+"\'],[o*=\' "+3.r+"\']");4(!7(I)){1p=3.d.m[I].16("[o^=\'"+3.r+"\'],[o*=\' "+3.r+"\']")}}L{F=1l.16("[o^=\'"+3.r+"\'],[o*=\' "+3.r+"\']")}4(!7(F)){1d["8"+c]={};5 z=0;l(z=0;z<F.e;z++){5 6=3.1c(F[z].V["o"].Y);1d["8"+c][6]=F[z]}}4(!7(1p)){1d["8"+I]={};5 z=0;l(z=0;z<1p.e;z++){5 6=3.1c(1p[z].V["o"].Y);1d["8"+I][6]=1p[z]}}4(7(1d)){f K}f 1d};3.2m=n(){5 1m=b.D(3.q["8"+3.S]);4(7(1m[3.1t])){f}5 2i=3.q["8"+3.S]["15"+3.1t];5 1n=b.D(2i);5 1K=0;l(1K=0;1K<1n.e;1K++){5 a=2i[1n[1K]];5 6=a.1x;5 13=3.E["8"+3.S][6];4(7(13)){13=""}5 1f="";3.2v(6,a,13,1f);4(!7(a.1u)){3.2o(6,a,13,1f,3.S)}L{3.2o(6,a,13,1f,K)}}};3.2v=n(6,a,13,1f){5 1N=b.D(3.O);5 2D=","+b.D(a).31(",")+",";5 18=0;l(18=0;18<1N.e;18++){4(2D.1O(","+1N[18]+",")<0){a[1N[18]]=3.O[1N[18]]}}1f+=3.2y(a);5 C=b.D(3.F);5 h=0;l(h=0;h<C.e;h++){3.F[C[h]][6].2u("k",13+1f)}};3.2y=n(a){5 w="";l(5 j 2B a){4(j=="x"){w+="x-24:"+a[j]+";";w+="-12-x-24:"+a[j]+";"}4(j=="1g"){w+="x-1g:"+a[j]+";";w+="-12-x-1g:"+a[j]+";"}4(j=="25"){w+="x-25-n:"+a[j]+";";w+="-12-x-25-n:"+a[j]+";"}4(j=="1i"){w+="x-1i:"+a[j]+";";w+="-12-x-1i:"+a[j]+";"}4(j=="1j"){w+="x-2U-1j:"+a[j]+";";w+="-12-x-2U-1j:"+a[j]+";"}4(j=="21"){w+="x-21:"+a[j]+";";w+="-12-x-21:"+a[j]+";"}4(j=="2T"){w+="x-22-30:"+a[j]+";";w+="-12-x-22-30:"+a[j]+";"}4(j=="2S"){w+="x-2K-2J:"+a[j]+";";w+="-12-x-2K-2J:"+a[j]+";"}}f w};3.2o=n(6,a,1h,3o,c){5 1u=J;5 C=b.D(3.F);5 h=0;l(h=0;h<C.e;h++){5 23=3.F[C[h]][6];4(!7(23)){$(23).3n("2Y 2X 2R 2Q 2N");$(23).3m("2Y 2X 2R 2Q 2N",n(){$(29).1V("k");5 Q=a.1w;4(7(Q)){Q=3.O.1w}1h=1h.2L(/1Y\\s*:\\s*[0-9,\\.]*\\s*;/i,"");4(Q==2){1h=1h+"1Y:0;"}4(!7(1h)){$(29).2n("k",1h)}4(!7(c)&&!1u){3.1t=3.1t+1;1u=P;3.2m(3.S)}})}}};f 3};',62,223,'|||ac|if|var|elementName|isEmpty|slide_||animateObject|Object|slideIndex|animateSwiper|length|return|obj|style_i||animateParam|style|for|slides|function|class|slideEments|animateTeam|prefixElementName||format_i|toString|apply|animateStyles|animation|prototype|element_i|controlChilds|object|slideNames|getOwnPropertyNames|elementStyles|slideElements|nestDiv|display_i|relateIndex|false|null|else|formatSlide|cssText|defaultAnimateParam|true|animateType|syncIndex|playSlideIndex|syncSameElements|activeIndex|attributes|tempTeam|arguments|value|loopSyncName|controlChild|scaner_i|webkit|oldStyle|currentElement|sync_|querySelectorAll|display_j|splice_i|tempStyles|scaner_j|format_j|getElementName|animateElements|init_i|newStyle|duration|oStyle|delay|count|getRelateSlideIndex|document|syncNames|elementNames|style_j|relateElements|controlNames|relateSlideIndex||playSyncIndex|isRecursion|getType|type|element|prevSlideIndex|controlObject|Number|child_i|play_i|initSlide|style_k|className|animateNames|format_k|loopSyncTime|left|sync_i|parseFloat|animateCount|defaultParamNames|indexOf|px|controlIndex|elementStyle|eval|continue|top|removeAttr|names|animateStart|opacity|elementAnimate|isSyncStart|direction|play|animateElement|name|timing|String|control_|Array|this|Element|NodeList|start|animateDelay|Function|animateDuration|playTime|Boolean|syncAnimates|slidePlay|Attr|params|playSyncAnimates|attr|setAnimateEvent|loop|scaner|isInit|layoutType|nestElement|setAttribute|setAnimateStyle|margin|elementMarginLeft|getAnimateStyle|offsetLeft|offsetTop|in|elementTop|newParamNames|0px|isNaN|body|playCount|getSlideElements|mode|fill|replace|SaveAnimateStyle|animationend|initDisplay|slide_0|oanimationend|MSAnimationEnd|finish|status|iteration|formatAnimateTeam|_|mozAnimationEnd|webkitAnimationEnd|isLoop|state|join|init|animateControl|hasOwnProperty|fadeIn|ease|normal|running|0s|none|typeof|string|ani_|parentNode|previousSibling|cloneNode|createElement|offsetHeight|appendChild|split|addChild|bind|unbind|nStyle|height|insertBefore|absolute|offsetWidth|clientWidth|parseInt|position|clientHeight|width|50|100|div'.split('|'),0,{}))
