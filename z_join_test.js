(async () =>{
    const express = require("express")
    const ItemSection = require("./database/tables/item_section")
    const ItemSubsection = require("./database/tables/item_subsection")
    const Item = require("./database/tables/item")

    //const item_subsections = await ItemSubsection.findAll({include: Item})
    //console.log(item_subsections[1].items[1].title)

    const item_section = await ItemSection.findAll({
        include: [{
            model: ItemSubsection,
            include: [{
                model: Item,
            }]
        }]
    })

    console.log(item_section[0].item_subsections[0].items[1])

})();
