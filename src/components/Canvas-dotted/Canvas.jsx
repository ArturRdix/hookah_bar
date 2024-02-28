import React, { useEffect } from 'react';
import style from './Canvas.module.css';

export default function Canvas() {
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const dots = [];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function Dot() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            //скорость движения точек
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;

            this.radius = Math.random() * 1; //размер точек
            this.alpha = 1; //альфа-канал
            this.decay = Math.random() * 0.009; //скорость появления

            this.draw = function () {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(255, 255, 255, ' + this.alpha + ')';
                ctx.fill();
            };

            this.update = function () {
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= this.decay;
                this.draw();
            };
        }

        //Кол-во точек
        function init() {
            for (let i = 0; i < 100; i++) {
                dots.push(new Dot());
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < dots.length; i++) {
                dots[i].update();
                if (dots[i].alpha <= 0) {
                    dots.splice(i, 1);
                    dots.push(new Dot());
                }
            }
        }

        init();
        animate();

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        });


        return () => {
            window.removeEventListener('resize');
        };
    }, []);

    return <canvas className={style.canvasAnimation} id="canvas"></canvas>;
}
