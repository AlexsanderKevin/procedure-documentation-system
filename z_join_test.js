(async () =>{
    const express = require("express")
    const ItemSection = require("./database/tables/item_section")
    const ItemSubsection = require("./database/tables/item_subsection")
    const Item = require("./database/tables/item")

    //const item_subsections = await ItemSubsection.findAll({include: Item})
    //console.log(item_subsections[1].items[1].title)

    const item_subsections = await ItemSubsection.findAll({include:ItemSection, include:Item})

    console.log(item_secitons[0].item_subsections[0].name)

})();
