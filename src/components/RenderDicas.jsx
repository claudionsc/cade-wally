export default function RenderDicas({dicas}) {
    return(
        <>
        {dicas.showMsg1 === true && dicas.show === false &&
        <p style={{ position: 'fixed', top: '260px', right: '720px', zIndex: '1', marginTop: '150px', color: 'orangered'}}>           
           Tá esquentando...
        </p> 
        }
        {dicas.showMsg2 === true && dicas.show === false &&
        <p style={{ position: 'fixed', top: '260px', right: '740px', zIndex: '1', marginTop: '150px', color: 'tomato'}}>           
            Quase lá!
        </p>
        }
        {dicas.show === true &&
        <p style={{ position: 'fixed', top: '260px', right: '620px', zIndex: '1', marginTop: '150px', color: 'green'}}>           
            ACHOU! Recarregue para jogar de novo
        </p>
        }
        </>
    )
}