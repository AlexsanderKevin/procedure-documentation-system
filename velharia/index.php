<?php include_once('basic.php'); ?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>


    <link rel="icon" type="image/jpg" href="main/img/favicon.ico"/>
    <title>Guia de Testes LENOVO</title>
    <meta charset="utf-8">

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    <!-- external CSS -->
    <link rel = "stylesheet" type = "text/css" href = "main/css/main.css">
    <link rel = "stylesheet" type = "text/css" href = "main/css/item.css">
    <link rel="stylesheet" type="text/css" href="main/css/modal.css">

  </head>
  
  <body>
    <!--#region cabeçalho da pagina -->  
    <div class = "header">
        <h1 id = "home" class="headerTitle">Guia de testes</h1>
        
        <nav id = "menu">
            <ul >
                <hr style="color: #fff; height: 2px;">
                <li><a class = "buttonAnchor mainColor" href = "#especificos">Específicos</a></li>
                <li><a class = "buttonAnchor mainColor" href = "#extras">Extras</a></li>
            </ul>
        </nav>
    </div>
    <!--#endregion-->
    
    <section id = "content">

    <!-- #region checklist -->
        <section id = "especificos"> 
        <div class = "checklistSectorTitle sectorTitle">
            <h2 >Testes especificos do Produto.</h2>
            <a href ="#home" class = "buttonAnchor checklist">Inicio</a>
        </div>    
            <ul class="mainUl">

            <!--#region LDIAG -->                
                <div class="checklist itemSection">
                    <h3 class = "checklist sectionTitle">LDIAG</h3>
                    
                    <!--section description-->
                    <div class="itemContent checklist">
                        <p>Todos os tópicos desta seção são testes realizados pelo <strong class="concept" onclick="showConceptModal(LDIAG)">LDIAG</strong>, portanto não requerem nenhum procedimento específico.</p>
                        <p>O procedimento para execução do teste <strong class="concept" onclick="showConceptModal(LDIAG)">LDIAG</strong> está contido na seção de itens <strong><a href = "#extras">Extras</a></strong>.</p>
                    </div>

                    <!--section content-->
                    <div class="itemSectionContent">
                        <?php

                            foreach($itens as $row){
                                if ($row['secao'] == 'ldiag'){
                                    echo "<li onclick='showAlertModal(ldiag)' class = 'checklist itemList emptyItemList ldiag' ".$row['id']."><h4>".$row['titulo']."<h4/></li>";
                                }  
                            }
                        
                        ?>
                    </div>
                </div>
                <!--#endregion-->   
                
                <!--#region verificações-->
                <div class="checklist itemSection">
                    <h3 class = "checklist sectionTitle">Verificações</h3>
                    
                    <!--section description-->
                    <div class="itemContent checklist">
                        <p>Esta seção consiste apenas em <strong>averiguar</strong> informações <strong>estáticas</strong> em relação ao equipamento.</p>
                    </div>
                    
                    <!--section content-->
                    <div class="itemSectionContent">
                        <?php
    
                            foreach($itens as $row){
                                if ($row['secao'] == 'verificacoes'){
                                    echo "<li onclick='showAlertModal(ldiag)' class = 'checklist itemList' ".$row['id']."><a href='content-page.php' rel='next' target='self'><h4>".$row['titulo']."</h4><a/></li>";
                                }   
                            }
                        
                        ?>
                    </div>

                </div>
            <!--#endregion-->   
    <!--#endregion-->       
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- external javascript -->
    <script src="main/js/itens-vazios.js"></script>
    <script src="main/js/modal.js"></script>

  </body>
</html>
