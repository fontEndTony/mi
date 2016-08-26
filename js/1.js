	$(function(){
	/*购物车js*/
			$(".daohang1 ul li a").mouseover(function(){
				$(this).css("color","#fff");
			}).mouseout(function(){
				$(this).css('color','#b0b0b0');
			});
			$('#gouwuche').mouseover(function(){
				$('.gouwuche_2').show();
				$('.gouwuche_1').slideDown(500);
			});
			$('.gouwuche_2').mouseover(function(){
				$('.gouwuche_2').show();
				$('.gouwuche_1').slideDown();
			}).mouseout(function(){
				$('.gouwuche_2').hide();
				$('.gouwuche_1').hide();
			});
			$('.gouwuche_1').mouseover(function(){
				$('.gouwuche_2').show();
				$('.gouwuche_1').show();
			}).mouseout(function(){
				$('.gouwuche_2').hide();
				$('.gouwuche_1').hide();
			});
	/*导航条2 下拉框*/
		// 小米手机
			$('.daohang2>ul>li').eq(0).mouseover(function(){
				$('.daohang2_a').slideDown(500);
			}).mouseout(function(){
				$('.daohang2_a').hide();
			});
			$('.daohang2_a').mouseover(function(){
				$(this).show();
			}).mouseout(function(){
				$(this).hide();
			});
		// 红米
			$('.daohang2>ul>li').eq(1).mouseover(function(){
				$('.daohang2_b').slideDown(500);
			}).mouseout(function(){
				$('.daohang2_b').hide();
			});
			$('.daohang2_b').mouseover(function(){
				$(this).show();
			}).mouseout(function(){
				$(this).hide();
			});
		// 平板
			$('.daohang2>ul>li').eq(2).mouseover(function(){
				$('.daohang2_c').slideDown(500);
			}).mouseout(function(){
				$('.daohang2_c').hide();
			});
			$('.daohang2_c').mouseover(function(){
				$(this).show();
			}).mouseout(function(){
				$(this).hide();
			});
		// 电视
			$('.daohang2>ul>li').eq(3).mouseover(function(){
				$('.daohang2_d').slideDown(500);
			}).mouseout(function(){
				$('.daohang2_d').hide();
			});
			$('.daohang2_d').mouseover(function(){
				$(this).show();
			}).mouseout(function(){
				$(this).hide();
			});
		// 盒子 影音
			$('.daohang2>ul>li').eq(4).mouseover(function(){
				$('.daohang2_e').slideDown(500);
			}).mouseout(function(){
				$('.daohang2_e').hide();
			});
			$('.daohang2_e').mouseover(function(){
				$(this).show();
			}).mouseout(function(){
				$(this).hide();
			});
		// 路由器
			$('.daohang2>ul>li').eq(5).mouseover(function(){
				$('.daohang2_f').slideDown(500);
			}).mouseout(function(){
				$('.daohang2_f').hide();
			});
			$('.daohang2_f').mouseover(function(){
				$(this).show();
			}).mouseout(function(){
				$(this).hide();
			});
		// 搜索框
			$('.input1').focus(function(){
				$('.submit1').hide();
				$('.submit2').hide();
			}).focusout(function(){
				$('.submit1').show();
				$('.submit2').show();
				
			});
	// 轮播
			var i = 0 ;
			var len = $('#img>a>img').length;
			var s = null;
			function run(){
				s = setInterval(function(){
					i++;
					if(i > len - 1){
						i = 0;
					}
					$('#img>a').eq(i).fadeIn(1000).siblings().hide();
					$('#lunbo>ul>a').eq(i).css('background','#fff').siblings().css('background','#333');
				},4000)
			}
			run();
			
			$('#left').click(function(){
				i--;
				if (i < 0) {
					i = len - 1;
				}
				$('#img>a').eq(i).fadeIn(1000).siblings().hide();
				$('#lunbo>ul>a').eq(i).css('background','#fff').siblings().css('background','#333');
			})
			
			$('#right').click(function(){
			i++;
			if (i > len - 1) {
				i = 0;
			}
			$('#img>a').eq(i).fadeIn(1000).siblings().hide();
			$('#lunbo>ul>a').eq(i).css('background','#fff').siblings().css('background','#333');
			})
			$('#lunbo>ul>a').mouseover(function(){
				i = $(this).index();
			}).click(function(){
				$('#img>a').eq(i).fadeIn(1000).siblings().hide();
				$('#lunbo>ul>a').eq(i).css('background','#fff').siblings().css('background','#333');
			})
		})
	// 列表框
		$(function(){
			$('.listbox ul li a').eq(0).mouseover(function(){
				$('.listbox_a_1').show();
			}).mouseout(function(){
				$('.listbox_a_1').hide();
			})
			$('.listbox ul li a').eq(1).mouseover(function(){
				$('.listbox_a_2').show();
			}).mouseout(function(){
				$('.listbox_a_2').hide();
			})
		
			$('.listbox ul li a').eq(2).mouseover(function(){
				$('.listbox_a_3').show();
			}).mouseout(function(){
				$('.listbox_a_3').hide();
			})
		
			$('.listbox ul li a').eq(3).mouseover(function(){
				$('.listbox_a_4').show();
			}).mouseout(function(){
				$('.listbox_a_4').hide();
			})
			
			$('.listbox ul li a').eq(4).mouseover(function(){
				$('.listbox_a_5').show();
			}).mouseout(function(){
				$('.listbox_a_5').hide();
			})
		
			$('.listbox ul li a').eq(5).mouseover(function(){
				$('.listbox_a_6').show();
			}).mouseout(function(){
				$('.listbox_a_6').hide();
			})
	
			$('.listbox ul li a').eq(6).mouseover(function(){
				$('.listbox_a_7').show();
			}).mouseout(function(){
				$('.listbox_a_7').hide();
			})
	
			$('.listbox ul li a').eq(7).mouseover(function(){
				$('.listbox_a_8').show();
			}).mouseout(function(){
				$('.listbox_a_8').hide();
			})
	
			$('.listbox ul li a').eq(8).mouseover(function(){
				$('.listbox_a_9').show();
			}).mouseout(function(){
				$('.listbox_a_9').hide();
			})
	
			$('.listbox ul li a').eq(9).mouseover(function(){
				$('.listbox_a_10').show();
			}).mouseout(function(){
				$('.listbox_a_10').hide();
			})
		})
	// 明星单品
		$(function(){
			
			$('.span2').click(function(){
				$('.mxdp_sp>ul').animate({left:-1200},500);
			});
			$('.span1').click(function(){
				$('.mxdp_sp>ul').animate({left:0},500);
			});
		})
	// 搭配
	// 热门
		$(function(){
			$('.dapei_sp>ul>li').each(function(){
				$(this).mouseover(function(){
				$(this).children().children().last().addClass('pinlun');
				$(this).css('box-shadow','10px 10px 20px #333');
				$(this).css('margin-top','-5px');
			}).mouseout(function(){
				$(this).children().children().last().removeClass('pinlun');
				$(this).css('box-shadow','');
				$(this).css('margin-top','');
			})
			})
		})
		$(function(){
			$('.dapei>ul>li>a').each(function(){
				$(this).mouseover(function(){
				$(this).css('color','red');
			}).mouseout(function(){
				$(this).css('color','#000');
			})
		})
		})
		$(function(){
			$('.dapei_re').mouseover(function(){
				$('.remen').show().siblings().hide().first().show();
			})
			$('.dapei_er').mouseover(function(){
				$('.erji').show().siblings().hide().first().show();
			})
			$('.dapei_dian').mouseover(function(){
				$('.dianyuan').show().siblings().hide().first().show();
			})
			$('.dapei_ka').mouseover(function(){
				$('.dianchi').show().siblings().hide().first().show();
			})
		})
	// 热评产品
		$(function(){
			$('.reping_sp>div>ul>li>a').each(function(){
				$(this).mouseover(function(){
					$(this).css('box-shadow','10px 10px 20px #333');
					$(this).css('margin-top','-5px');
				}).mouseout(function(){
					$(this).css('box-shadow','');
					$(this).css('margin-top','');
				})
			})
		})
	// 内容
		$(function(){
			var i = 0;
			var len = $('.leirong_1>img').length;
			s = null;
			function run(){
			s = setInterval(function(){
				i++;
				if (i > len - 1) {
					i = 0;
				}
				$('.leirong_1').animate({left:-280*i}, 1500);
			}, 2000)
			}
			run();
			$('.leirong_1').mouseover(function(){
				$('.leirong_1_left,.leirong_1_right').show();
			}).mouseout(function(){
				$('.leirong_1_left,.leirong_1_right').hide();
			})
			$('.leirong_1_left,.leirong_1_right').mouseover(function(){
				$('.leirong_1_left,.leirong_1_right').show();
			}).mouseout(function(){
				$('.leirong_1_left,.leirong_1_right').hide();
			})
			$('.leirong_1>img').each(function(){
			$('.leirong_1_left').click(function(){
				i++;
				if (i > len-1) {
				i = 0;
				}
				$('.leirong_1').animate({left:-280*i},500);
				
			});
			$('.leirong_1_right').click(function(){
				i--;
				if (i < 0) {
				i = len - 1;
				}
				$('.leirong_1').animate({left:-280*i},500);
			});
			})
			$('.leirong_1').mouseover(function(){
					$('.leirong>div>ul>li>a').css('box-shadow','10px 10px 20px #333');
					$('.leirong>div>ul>li>a').css('margin-top','-5px');
				}).mouseout(function(){
					$('.leirong>div>ul>li>a').css('box-shadow','');
					$('.leirong>div>ul>li>a').css('margin-top','');
			 })
			 
				$('.leirong>div>div>a>img').each(function(){
					$(this).mouseenter(function(){
						
						$(this).siblings().slideDown(1000);
					}).mouseleave(function(){
						
						$(this).siblings().slideUp(1000);
					})
				})
		// 返回顶部	
				$('.dingbu').click(function(){
					$(document).scrollTop(0);
				
			})
		})
	
		
		