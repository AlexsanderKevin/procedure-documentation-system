<?php include_once('basic.php'); ?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="icon" type="image/jpg" href="/main/img/favicon.ico"/>
    <title>Conteúdo</title>

     <!-- Bootstrap -->
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
     <link rel="stylesheet" href="main/css/item.css">
     <link rel="stylesheet" href="main/css/main.css">
</head>
<body>
    <section id="content">
        <div class = "checklist itemListPage">

            <!--header-->
            <div class = "itemHeader"> 
              <h1 class="itemTitle"></h1>
            </div>

            <!--item content-->
            <div class = "itemContent checklist">

                <!--#region description-->
                <div id="description" class="subItemContent">
                    <h2>Descrição</h2>
                    <div class="subItemContent">
                        
                    </div>
                </div>
                <!--#endregion-->
                
                <!--#region soluiton list-->
                <div id="solution" class="subItemContent">
                    <h2>Soluções</h2>
                    <div class="subItemContent">
                        
                    </div>  
                </div>
                <!--#endregion-->

                <!--#region Obs-->
                <div id="obs" class="subItemContent">
                    <h2>Obs:</h2>
                    <div id="obsContent" class="subItemContent">
                        
                    </div>
                </div>
                <!--#endregion-->

                <!--#region possible problems-->
                <div id="obs" class="subItemContent">
                    <h2>Possíveis problemas</h2>
                    <div class="subItemContent">

                    </div>
                </div>
                <!--#endregion-->    
              
            </div>
            <!--footer-->
            <footer>
                <a href="index.php" rel="prev" target="self">Voltar</a>
            </footer>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>  

</body>
</html>