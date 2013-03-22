#jQuery.image_optionbutton
##画像や写真をオプションボタン化するプラグイン
写真や画像を選択してもらう場合に、オプションボタンを付けずに、直接imageをクリックして選択出来るようにするjQueryプラグインです。  
選択した画像を取得するメソッドselectedValue()も用意してあります。  
  
###HTML  
    <ul>
    	<li class="option1" val="1" selected="selected"><img src="image/1.jpeg" alt=""></li>
    	<li class="option1" val="2"><img src="image/2.jpeg" alt=""></li>
    	<li class="option1" val="3"><img src="image/3.jpeg" alt=""></li>
    </ul>
    <button type="button">選択されている画像は？</button>
*グルループにしたい<li>タグに同じclassを付与します。
*最初から選択しておきたい要素にselected="selected"を付与します。
*valオプションの値をselectedValue()で取得出来ます。
　　
###Javascript

    $(function(){

    	$(".option1").optionButton();

    	$("button").click(function () {

    		var val = $(".option1").selectedValue();

    		alert(val);

    	});


    });