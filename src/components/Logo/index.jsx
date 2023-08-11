import React from "react";

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="150"
      height="63"
      fill="none"
      viewBox="0 0 180 63"
    >
      <path fill="url(#pattern0)" d="M0 0H180V62.567H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00292 0 0 .00839 0 -.066)"
            xlinkHref="#image0_19_3"
          ></use>
        </pattern>
        <image
          id="image0_19_3"
          width="280"
          height="135"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAACHCAYAAACieBqDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB2TSURBVHhe7Z152FXVdcZjqjHWJmoUJwSRGRkdEFEEB1QkCkaMAyIOFEFxQhFnxVlERRQVJ0zUpJlMjcnTwWibtGlTMzrEaExaU5um5UmHJ6lNn9jh632BdffyZt17z95n7XP2OXf98XvQ71t3733vd+97z1l77fW+b/udJ/QZhmEYupi4GoZhRMDE1TAMIwImroZhGBEwcTUMw4iAiathGEYEuorrtH1HRGHgwLHifKnQf49x4rrzMmXCCHG+duw3epQ4Th2YPH6k+Jx9KPL12WPAOHENoUwV5tBm5NDR4txlMmnsSHGtWowfubc4b9F0Fde+T70vCmsW7CzOlworTt1NXHde/v2R3xHna8df3vB74jh14Gf3byU+Zx/++qZtxbFjcPv8XcU1hPK/T8nzaHLXWbuIc5fFLruP6/vvJ7cQ16rFj+7+oDh30ZQmrm+v/YA4Xyp897bfFdedFxNXR9XE9Y27dD+0vSiuH508VFynNnsNKv/OuDRxBRq3hTEY0biVktargYmrQ1tccTeEq0tt3rr3A805Jo7Re8/SmP/68JbivKE8vWz75th3npmWuN50mrsjfP7aD4vrD+Wllds0xz7tiL3E+YukVHG99XTd2ywtLj+xv7heDUxcHdriOmSvMWJMXrggaL5n6cr1zdVbi78PBcJC603tyvX5az/UXNuxBw0VY0JZPsd9btcu7CfGFEmp4vrKHduIc5bNN26MJ2gmro6qiCs2zWiO1+7USw30mrh+ZJcJff+x/v0b14W8K/KvUlwoh+wzovm8kdaTYoqkVHEFY0eksbNHDG58QP8vYi7MxNVRFXEFEFWaB2IrxfjSa+KKnXxa17du2VaMyQPE+53N4o3XVlu8fSldXK/6eH9x3rK4cNYAcZ1amLg6qiSuSAfQPDfP202M8aXXxJWn2+6JVC303NUfbs5x/JQhYkxRlC6u32x8OKR5y+Kr17g/TgxMXB1VEleeGnh1lU46q9fE9ZnlbqPt5MMGizF54SWUK+eXu6dTurjiFhy34tLcRTNg4Ni+3zwRtwbPxNVRJXEFKMWiucYopLN6TVz/rfHep3VpH8ggjp40rDnHXzQ+O1JMUZQuruCi2QPEuYtmwYw9xfVpYuLqqJq4otyH5rphbv7UQC+J6757x9kUbGWnXcf3/dcnN+Vd8S/+X4orgiTEFbfi0txFw29bYmHi6qiauKIum+Z6WaHSpZfEdcmxA5trevS8ncQYLXi1z/SJw8SYIkhCXHErjltyaf6i2Hm3xjfeJzZ948XExNVRNXEFP7ln6+Z8eVMDvSSuT130keaazj56TzFGi1Vn7NKc67pTdhdjiiAJcQW4JZfmL4q5h7s3ZExMXB1VFFf+wV1xar4Pbi+JK/9SwglIKUaLjx0ypDnXH19V3l1xMuL6h5dtL85fFH9wsftmjYmJq6OK4oquZjTf92/PV6jeK+KKc/60np/eG7+nCOpb6bXFoQUppgiSEVfckuPWXFpDbHbcdXzfrx5zO5kxMXF1VFFcwT+sdb0G8qQGekVczzhyUHM9uIiRYrT5XuOLj+Ysq4dJMuIKTjo0Tu1bN2ZPcbcRsUE5irSGdnx9hb64bli35cakf9l8UeFupQxxvbshWDRnnpxer4jrg4v6NdeDQzpSjDboLUBzXvKxPcSY2CQlrkh6S2uIzWPn7SSuJwYpXLkWdfVQBGWI61SlM+y9Iq68W9XEMTpHh7vBX4MvXLqDGBObpMQVrddwiy6tIxY77DKh758f3EpcTwxMXHUpQ1yBRmqgF8QVhwXoefreteWB53nx+ZZiYpOUuALtNmTdOIqd6CgCE1ddyhLX1Wfv3Jz3mpPCUgO9IK4nsJ37Zy/fToyJBRwJaO5xJVi/JCeuDy0utg/jfQvdh6QITFx1KUtcD9tveHPeb9+6rRjTjV4QV166dmXBTZrWL9mxOfeimQPFmJgkJ65FX8LDbkZaRyxMXHUpS1wBTw0MH+Jfu9kL4oqNS1rLoY0vJCkmFguPccfZP3H+jmJMTJITV4CrAmkt2vDmukVh4qpLmeJ67++7u56Q1pl1F9fWc/7otyrFxYLbNb25unjTwiTFtag3xB1nuEYcRWHiqkuZ4jp9oksNvHizf2qg7uJ65AFuP+OF6z4kxsSG35kWbVqYpLgW9S3zOmshVxQmrrqUKa5gwzpXaeKbGqi7uF5/yu7NdWg1GPfls0t3aK5hXuN1kWJikaS4gtj1cLCXkeaNjYmrLmWL6/3nuGJ1dNqXYtpRd3HFuX5aByy1pZjYXDzbOYvgbyXFxCJZcdXol9kJNN2Q5o2NiasuZYsrv/X1ddWou7jGNCPMCqzQ6bXAkVgpJhbJimts98bvNMaX5o2NiasuZYsroNQAXDV8UgN1Flfe+zYkH60JOSDg9S5S5JMVVxCrNRnfRSwaE1ddUhBXfnb+sjnZz7HXWVyXHr9Hcw04cCHFFMWXr9iuuRa0I5RiYpC0uC6fE6foGONK8xWBiasuKYjrjANdauCvbszu21Rncf38pW4jqayGTAQOL9BaUCEkxcQgaXGNZTAWQ7CyYuKqSwriiv4UIamBOosr9evAc4xlRpgVHF6g1wOfJykmBkmL6/88uYW6MyzGwwdAmq8ITFx1SUFcwcOLXWe1SzO2uKuruKKRDc3/AyUb8jzg8MI7mzfXijQtTFpcAYzNpHWFcsEsV5pRBiauuqQirig1onVkvTqqq7jyY6ePnBvXjDArOMRAa0KFhxSjTfLiqu2B89zVrvauDExcdUGOk55XmeIK+IGCoYO7r4ViY4rrnWcWL67rl7ir+LOOGiTGFM2Nc3drrqko08LkxRXOsLv218nZYByMJ81TFCauuqRy5Qp403XslksxnLpeufKTjxoVP6cenv9k1Ux2Z/EnBZkWJi+uAB480tp8gaWvNH6RmLjqkpK4HneQ+wB/7fruZ+nrKK7YvKK531IyI3z+2vx9CZBnxWEGrKso08JKiKuWTQMcZqXxi8TEVZeUxBVVA1Swjs3Ybo1C6iiuuMqkuT+t8D7bb/Sovncbd5saHbVwgo7WdlABpoWVEFc4s+Z1hsXj4TArjV8kJq66xMq5ht7O8nxjNzM+iqtTznXNAteGUWMzmu42YWku/d4HfNHQ2rKkbfJSCXEFc6bmK0Tm36hlYuKqS6wrV+woHxzwgT6eOQn/WZc2e3W8coUrA829f+OqU4rxgVxcNVxjT5w2uLm2IkwLKyOuj+fsJI5bFGncojFx1SWmuK6c73+aBwabWVMDdRNXnNunvKaWGSHdmeT9/IP+zCyxCMeTyogrnGGR05LW2A284ZFakMYtGhNXXWKKK3a9pd9145MXOO8m1FVLMaBu4gpzUZr3S8u3F2N8oVTey3foHEbAOLTG2KaFlRFXgDPc0hq7wW/VysbEVZeY4ooxQ25t50x177dOO911E9db5jlnjys8e9tKHDDWddbCa9Uv574LWMea7MQ2LayUuCL/Iq2xG4+y+sOyMXHVJba4hvQVxp0S9TJFaqDd2fq6iStyzDTvtH3zb0BB/Gg8AFsdKc6H+UcOao4X27SwUuIKPxxpjZ1AKoGaSKSAiasuscX1+4ENlp+6yOX42+2a10lcUSpFZoT4YtEoneJXmcCnnWM7kAOn8WLbSVVKXAEcW6V1toM+JKlg4qpLbHEFsASSYjrBd6a/eo18IqhO4so7T2kU/QM02aYxgdb79sf3bN0cM6ZpYeXE1XcHl9sfp4CJqy5FiOvVJ/nnD7OkBuokrrxn6k2n5bdo2ngl3FKX/qO7da40n2AbjjFNCysnrq/d6fcCc2vdFDBx1aUIcQ21KcHrTGOc+9HfTg3USVxRHUBzHhO48cxBjTGNx9HoM7K48beg8WKaFlZOXEHW2zSc6pAeXyYmrroUIa6+3ljEyYe51MCfXv3bqYE6iSvV9qLOVaNf6vnHvXczi9BwkR0/0vWbjWlaWElxzdoyDCkE6fFlYuKqSxHiCrI2wObgyDWlBtCNrTU1UBdxRbkazefrgNsOXuHz7Vudmeg1J+m0C+ROCbFMCysprt+6JdsfECkE6fFl4iuusLqRxsnDq6u26bu98cUTg332zn/k0YeixPXrK8LsQT671HlJtdZV1kVc+VXm3UrzcXdmfhv/9DKdwwk4/kpjxjItrKS44jatW2MNpA6kx5ZNCleuMUEBvfQ8YlGUuGbpciUxl/W0+KMrt3vP7+oirp9iZWeokpBifKHxfvHQln0DBrryKa02hpc07kRozFimhZUUV9Ctq831p+wuPq5sTFx1KUpcQaejrO3g3dhaUwN1Ede/W7OptAnPp92BCR9wAIHWT04kvHxqYENsWx/jy+TxI5vj4TMmxeSlsuLareMQz9OkhImrLkWKa7t61W7wW1D4S9HP6yCuvCj/FaXz/xfPdj53OFKLn/H0itZ7LLZpYWXFFbT7lhw1bLQYnwK+3YKQ65PGSZVY+at2FCmu0qZUFlBLSWN85QqXGqiDuJ55lDtO+tBinbImHEulManV6OUnujram+flr6MFSNPQmPh7SzF5KEVcsSEl/dwXfhXAWXaCy6fkQWudHF9xtSvXzhQprqDde64TrakBqtWsg7hCUGkuCK0U4wvvXEUpgOkT3d+jNXcdyrUnu9Qh0ohSTB5KEVfuxJiHdm3NtK72sPst/TwPJq66xHIi4B/mDeu2bP73s5eHfbCfXuZua9FdHz+j/48prrGdCLgQDh+i8/rTeD9t2byin2v1Yj18f3dkV9tlGpQirjitolEmhauBVvuXwY0PmBTrC0QNxx6l3+XBcq66xLpy5eKKumC68sS/IaeEYLJJ45FAV/3KFSkSeg5/u0bnORzBBO+ZlosnNNGh340clt9VFnlW3mxGislDaeK6+mydM/94I/H1tjvZ4QtuE0xc/amjuKL5NTe3DHEjhiC3CnTVxRX5UJoHXcCkGF94Sq/1Vp1bl6PEjf8uFLj00pjapoWliSvOH0u/86X1tBE8yaU4Xw4cN9LENYC6iiu3ZcctvvSYbnCBRn6y6uKKlAPNo2FGCHjN7KyD33vUFXPQ77TSHbed7lJ/IafwOlGKuJ7XeJHQNeiXCtYrsG/BWFgrrgawYSDF+fDzBzbldExc/amruPL3lpSOysJZbGcdQlt1ceX57n2VTub9kKULW9MvuOCh373QpRQzK8cxa5rQL812lCauGBtH2aTf+wIbF4x39tHuzZsH3H5gPBNXf+q4oYUWdfgZNj3oZycd6n8Safc9xjUf/+vHN6UIQFU3tCjNsWGdzgbTbuz1adfI+j83v25aBogQcJpT27SwVHFttXEIBU0eMN4X2W1XHuiDY+LqT12uXHkpFokr3rf0M9y+tj4mC1++wtVWElW8cj1qknt9cBUuxfhyNBvzc5fIV5H88zBhlI7BILcDR8csKSaEUsUVHwbp977QNw59k+aFnruJqz91FlfsjqPHAH6G3WVKR/mwYIbL3RJVFNcVp7oa0eVz8psRApga0pjtDA7XLHAb4bhTlWJ8uYeNiSYxUkwIpYor4N8aeUDzBennvjzH+m6auPpTZ3EFf852l0NOo0n7AlUUV/SnpTl8rZfawY+44ipWiuElbfct3FmM8YX33UV+XYoJoXRxxVE2KaYsUApCa7uKWVdoYcdfdSlaXHk3pfVLNqWjfOHHLkEVxZX61OJfDTNCgDwrxsRGX+tmFjGGdbtDvl2K8aV/446ExtT8W5QurrwDTgpwl4O6iisM5I49aGgUBkU0fJMoWlzhSICWl/g5/pZwF+aPy8I5M9+bGqiauKIelMYPbWbTCt9Y6mblhDaEiEMaUEvYf7DKnTTTMi0sXVzBvzzsjheWSasBWl3TAuZE0J124gr+hrmShvhFIXfLUwNVE1fUg9L4N8zVaaIC+xYa88kLO78/edXGpHE6hf+PnOsOKJw+XeeAQhLiyj3ey6Q1h2Pimj5liCt/Xzy4KKwTFD/sUjVx5X0SZiiYEQLYt9CYSL1IMQTaEFKsZPwYAi/jfEDJtDAJcZ3PktRlgoJivi4T1/QpQ1y5y0VojSdEgcaomriS/5SWGSHgNe+H7TdcjCGwaUqxuOKUYnyBswmNiR4GUowvSYgrioepxKUsUNTdWlpj4po+ZYgreGmly9Gh2Ujr77vBy7qqJK7jmHMqXnspJgRyM3j3iS36+nU5/cZtX9AUX4oJgTsqaJgWJiGuIIYRnw9S+0IT1/QpS1xvOs1VuaAJUevvs4DNIDy+SuLKD/5ojY2erTRmVqtrdOFCfBYxzgrva3CCQtVLMuLKcy5lIDWeMHFNn7LEldtJv702zDSPOrhVSVwfF1wC8oLj6zRm1vK2zzPrHFQcSTG+8I56q87I/7olI64HjHXlHWUgfTBNXNOnLHEFqC6hmIMn+H/AKTVQJXGl54xbZ6xfivFlxanuLgACJ8W0ciUrk1x6vL9xpASaz9CY31CooU1GXAG6UUnxsWmXwDZxTZ8yxRVXNxSzcn6YPTO6O1VFXLkZIRwIpJgQkJKjcbP2VOW9Ddr9fUJA7TLG1DAtTEpcea1ZkbTzLTdxTZ8yxXXqPu4AzOt3dS58b8eFswZURlzRoJrGXRdYgiaBtArG9DkUgDwrtWx8dZWe0POeu3gPSDFZSUpcT5zmzvgWyfSJ8m6viWv6lCmugIQBIA8rxXQCV4NvBApzO2KJK+rAadwQNwYJvpmFwxlSTDvIv6vTcVlfLpvT3gnBl6TEFQ2INZpd+4DTYe2OMJq4pk/Z4soFJ/S00sOLdWo1iVji+p3bnIeV1hFRbhXjeyBj/RK3uYY0gRTjy5QJ7m4EBz2kmKwkJa6Ad9spgs8sbS80Jq7pU7a48txfaPE5jn5KPw8lhrii7hOHBjDmT+7RS2NoNW5q16LQF6Ql3mFNaaSYrCQnrrzrUBF06glp4po+RToRtOOf2EYsb/xTFlxctZwI0JSHxuz2evjwFaF5eAhoVyiNHwI/mjw54wabRHLiOmqYO4YWG5TBIOcjrQOYuKZPCuLKN2LRSU2KKZIY4norM/LTOs8PvnDpDhvLnvLSrdmLD8i10nPt1uegE8mJK8DOq/Q4bXBLKc1PmLimT9lpAQCXUop90XNTJgYx0gK8Sfg+SmaEqcJTPXlMC5MUV267EBNYVUjzEyau6ZOCuKInBdVHotcrer5KcUWhLa7IQ6LuE+Npm/ilCOpbNZ5vkuLKezvGpFvBsolr+qQgrgC3pRSv7X/vi7a4Hr7/8OZ4MAGVYuoG/9yFmhYmKa64EvjlY5uuBGKB02DS3BwT1/RJRVzhGEzxcI+QYopCW1y5IwfqQKWYusE9+UJNC5MUV8BPSsQgS4MIE9f0SUVcUaNNvlLYKNWqAw1BW1y5HTjqQKWYugEvOHrOoaaFyYorbyYcg1MO697Rx8Q1fVIRV4Cdb3rMBbN0momEoC2ulE/WNCNMHdT10vHa0OPJyYorPihkBKcNToGhQbc0L8fENX1SEldu+6xl3BeCprhOHOM6RXHb+V7guzlPpCUrroA/OU3gfirN14qJa/qkJK44307Ht/GvVks+XzTFFY1laCy0BpRi6srahf2azz3EtDBpcb2NFS5rsnxOtkJvE9f0SUlcAT9xtPCYPcWY2GiKK94rNJbW+f2qwLuAhZgWJi2uvAREkwmjspVWmLimT2ries7MPZuPw0aQFBMbTXF9697N7QAV+ptWDd6/NqRvRNLiCtC1ShojFJ/ktIlr+qQmrtx4EP1JtVrh+aAlrtwRFUdMpZi6g3aQeP4hpoXJiys3DdMAeRRpHgkT1/RJTVwBcvr0WK2+pz5oiSv38tfwlKoiKNmk18DXtDB5cT3zKPcH1mD2lOwvkIlr+qTQuKUVvgkEIz0pJiZcXPM0bnlosdvQ0XBDJWYcOGxjl61YaOaGF8xwaZ52jiXtSF5cUTJFt1l5+fXj7994+kuaR8LENX1SvHJFro7KCJEawAEDKS4WWleusE/BGJpmhAOY80AsNJ0J8qRGkhdXoCUwz17ut8Fg4po+KYorwAeRHn9yhgMrmmiIK8SUiuhDm4BLcOeBmGg2IP/7+8I29Sohrtex/op58D01Y+KaPrHENU9aAKDcjx6PfQMpJhYaaQHuZxdShtSOW+a58krkpm+fv6saX2NtEa89OZ//FQefFxoXX7pSjEQlxLUsTFzTJ9UrV7QdpMfj2KhPOiovGleudzceR2OEFNC3g3f5nzNVL48LeF0qepNIMSFcNJsfpMgu2iauHTBxTZ9UxRVwQz80ApFiYqAhrt9kr6tmE5pfPORKK5F/lWJCGTp4THNs3MpLMSFMHDOyOS48/qQYCRPXDpi4pk/K4oqrHBojSxc2LfKKK/KKZEYY2rREYsyIvZvr0jQ55Pzj/c7PTFO8efMa6fcSJq4dMHFNn5TFFWaFNAY+nO0s3LXJK64olaLHh7bbk+CNbT53SZwStS8td61KPz5NbyMRm+E07sEZ2y6auHbAxDV9UhZX8Nqdzg/umIZoSTHa5BXXG+Y6u+vQRtESa5h9U9b+Hr5wc0H0JpFiQriSNQxfdkK2huEmrh0wcU2f1MWVNx96cJHernsn8oorWgvS40MtTiT4e3n6xOFiTF5wiIDm0GyROG3fEc1xn16WbbPMxLUDJq7pk7q4wqeNxtmwrhhzvzziimbY5KigbUaIAxUY990ntujrF+lgBQ4PUH0uNs+kmBDwurzj+bqYuHaAewdpgdybNFc74MckjZOHDeu2bPq9l4mG2V3q4greXrupCB0csX+cKzZOHnGFjQs9No+tdCuTxrkvGfRplmK0+CFLxSDvLcWEwHtGZOmsZ+LagbpeuabCz+7Pf2VUBXFdfbbLNeK/pRhN8ogr8on0WE0XW3zmadyHF8etnOBOvOhNIsWEcCPLRcOGSorhmLh2wMQ1Lr0irrhapbFwFSvFaJJHXJFPpMd2s5734dHzXHepRTPjfv4vZkX/2ESTYkLAhiSNm+U9YeLaARPXuPSKuALkW2m8rKU8oeQRV+QT8Tifes4sfO92d6Bi/9GjxBgtDtnHpTaQfpJiQuD1vz/OUKdr4toBE9e49JK4rlvk2vetnK9XIiQRKq6oDKDH4ZiqFBMCNq+wiYVxf/WY3/s/BGw+0eYZ/tV0rOXvt24n10xcO2DiGpdeEteZk12J0Ot3fVCM0SJUXFHTSo9DvagUEwJPi7xwXTZz0Lzw47vYTJNiQsDrSePO79II3cS1AyauceklccXpLDpCCWLeGoeKK05j0ePw/KWYEC6b4zbJinI04M6tmnrDWyZ26xZm4toBE9e49JK4gsfPd+KFU1BSjAah4vrm6k0lTNpmhKirpvUU1duWW9RgM02KCaG/R59bE9cOmLjGpdfEFS32aEzNBtSthIgrdzrFe06KCYVEG6BzlRSjzTiWP9auq31pZTaHBhPXDpi4xqXXxBU9Xen0E9AscOeEiOs89hhfr6hO4MQUjavZBjAL1N5Q+0QYjjHTc+rkLWbi2gET17j0mriCzyx1t8h4f0kxeQkRV56j1Ow9O+tgt5GncSLPB/RepbkPVzwZh40sGrdTDtnEtQMmrnHpRXHlwvfizduKMXkJEVfcOiMet7q+/vyd4D1tY32ZtINbymTtZJUFnkLpVEdr4toBE9e49KK4wgmWajDhEAs7GCkuD77iCjGlTRoU+0sxofA+qOgTK8XEgue4P63crAhNxDFup80/E9cOmLjGRVtccdRRMq4LAYJK42qKK3iGNXTGf0vz54EfYc1iUDh7ihOhl+/YRhwzFG7romV3nZVB7Arz5w9sJa4vlDfucpt0R7Rpn2ji2gET17hoi2sstMV1wYw9xXlikOXKFWIhPVaTVxqiLc0dG9jJSOvRBN3zpLlNXDtg4hqXXhVXXMH9ZvNx0NhkEdcYbS1bWb9E9zXMCuxkpPVogrsPae6u4ooO3NoMHlRMrVtehg0eI64/D+iXKc3Vjv1GjxLHqQOTFbouFfH6xCiZmjimmL/ryKHdc7poJCM9VpOi6ltbGT5E/zPcyqSx8vu4q7gahmEY/pi4GoZhRMDE1TAMIwImroZhGBEwcTUMw4iAiathGEYETFwNwzAiYOJqGIYRARNXwzAMdSb0/T9kKtU0mWi8FAAAAABJRU5ErkJggg=="
        ></image>
      </defs>
    </svg>
  );
}
